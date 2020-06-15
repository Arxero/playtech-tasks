import { Injectable } from '@angular/core';
import { IForecast } from './forecast.models';
import { of } from 'rxjs';
import { forecastData } from './forecast.data';



@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor() { }

  getForecast(): Promise<IForecast[]> {
    return of(forecastData).toPromise();
  }
}
