import { Component, OnInit } from '@angular/core';
import config from '../config/config.json';
import { Weather } from '../weather';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  startLoader = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  fetchWeatherData() {

    const apiKey = config.apiKey;

    console.log('Button has been clicked, fetch weather API data');
    // Use browser's built in geolocation API
    navigator.geolocation.getCurrentPosition((pos) => {
      this.weatherService.getWeatherInfo(pos.coords.latitude, pos.coords.longitude, 'metric', apiKey).subscribe(weatherInfo => {
        console.log();
      })
    }, geolocationError);


/*     function positionFound(position) {
      console.log('Position:', position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Fetch the data using the co-ordinates from the browser's geolocator


      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${apiKey}`)
      .then((resp) => {
        resp.json()
        .then((data) => {
          console.log(data);
          // Display the data
        })
      });
    }  */

    function geolocationError(err) {
      console.log('err:', err);
    }
  }

}
