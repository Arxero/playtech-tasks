export interface IForecast {
  image: string;
  icon: string;
  day: string;
  desciption: string;
  min: number;
  max: number;
  degreeType: DegreeType;
  details: IForecastDetails;
}

export interface IForecastDetails {
  isOpened: boolean;
  chanceForRain: number;
  windSpeed: number;
  sunrise: string;
}

export enum DegreeType {
  Unknown,
  Celsius,
  Fahrenheit
}
