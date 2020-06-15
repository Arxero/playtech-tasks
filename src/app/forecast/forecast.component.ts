import { Component, OnInit } from '@angular/core';
import { ForecastService } from './forecast.service';
import { IForecast, DegreeType } from './forecast.models';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecast: IForecast[];
  breakpoint: number;
  slideToggleText: string = 'Fahrenheit';

  constructor(private forecastService: ForecastService) { }

  async ngOnInit(): Promise<void> {
    this.breakpoint = (window.innerWidth <= 480) ? 1 : 7;
    this.forecast = await this.forecastService.getForecast();
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 480) ? 1 : 7;
  }

  onInfo(item: IForecast) {
    const allOtherItems = this.forecast.filter(x => x !== item);
    allOtherItems.forEach(x => x.details.isOpened = false);
    item.details.isOpened = !item.details.isOpened;
  }

  onSlide(event: MatSlideToggleChange) {
    this.slideToggleText = event.checked ? 'Celsius' : 'Fahrenheit';
    this.forecast.forEach(x => {
      x.degreeType = event.checked ? DegreeType.Fahrenheit : DegreeType.Celsius;
      x.min = event.checked ? this.cToF(x.min) : this.fToC(x.min);
      x.max = event.checked ? this.cToF(x.max) : this.fToC(x.max);
    });
  }

  private cToF(x: number): number {
    return x * 9 / 5 + 32;
  }

  private fToC(x: number): number {
    return (x - 32) * 5 / 9;
  }

}
