import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherApi } from '../weather.api.class';
import { Weather, Clouds, Coordinates, Main, Sys, WeatherInfo, Wind } from '../weather';

interface WeatherInfoFromAPI {
  data: WeatherInfo;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private weatherApi: WeatherApi) {}
  

  getWeatherInfo(latitude, longitude, units, apiKey): Observable<WeatherInfo> {
    return this.weatherApi.get(`?lat=${latitude}&lon=${longitude}&units=${units}&APPID=${apiKey}`);
  }
  
}