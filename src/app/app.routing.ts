import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketsValidatorComponent } from './brackets-validator/brackets-validator.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  {
    path: '',
    component: BracketsValidatorComponent,
  },

  {
    path: 'forecast',
    component: ForecastComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
