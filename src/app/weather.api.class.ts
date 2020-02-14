import credentials from './config/config.json';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class WeatherApi extends HttpClient {
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private headers = new HttpHeaders();

  public constructor(handler: HttpHandler) {
      super(handler);
      console.log('We are creating new instance of WeatherAPI extending HttpClient, here is the defualt handler: ', handler);
  }

  public get(url: string, options?: object): Observable<any> {
      url = this.baseUrl + url;
      return super.get(url, { ...options });
  }
}