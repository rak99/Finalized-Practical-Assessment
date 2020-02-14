import { Component, OnInit } from '@angular/core';
import config from '../config/config.json';
import { Weather } from '../weather';
import { WeatherService } from '../services/weather.service';
import { PhotoService } from '../services/photo.service';
import { WeatherInfo } from '../weather';

import {
  trigger,
  transition,
  useAnimation
} from '@angular/animations'

import {
  slideOutRight,
  slideInLeft
} from 'ng-animate'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInLeft', [transition('void => *', useAnimation(slideInLeft, {
      params: { timing: 0.4, delay: 0 }
    }))]),
    trigger('slideOutRight', [transition('* => void', useAnimation(slideOutRight, {
      params: { timing: 0.4, delay: 0 }
    }))]),
  ]
})
export class HomeComponent implements OnInit {

  startLoader = false;
  touched = false;
  showSlowConnectionMsg = false;
  weatherInfo: WeatherInfo;
  imgUrl;
  photoUrl= '';
  photoCollection = [];
  date = Date();
  locationAccess;
  amountOfImages: number;

  constructor(private weatherService: WeatherService, private photoService: PhotoService) {
    navigator.permissions.query({name:'geolocation'}).then((result) => {
      console.log(result.state);

      if (result.state === 'granted') {
        this.locationAccess = 'granted';
      } else if (result.state === 'prompt') {
        this.locationAccess = 'prompt';
      } else {
        this.locationAccess = 'denied'
      }
      // Don't do anything if the permission was denied.
    });

    if (outerWidth < 1200) {
      this.amountOfImages = 1;
    } else {
      this.amountOfImages = 3;
    }

    this.photoService.getRandomPhoto('nature', 'portrait', this.amountOfImages).subscribe((data) => {
      const photoData = data;
      console.log('Photo_Data', photoData)
      if (this.amountOfImages === 1) {
        this.photoUrl = photoData[0].urls.raw+`&w=${outerWidth}`;
      } else {
        for (let elt of photoData) {
          this.photoCollection.push(elt.urls.raw+`&w=${outerWidth / this.amountOfImages}`);
        }
      }
      console.log(this.photoCollection);
    }, err => {
      console.log(err);
      if (err) {
        this.photoUrl = '../../assets/luca-bravo-zAjdgNXsMeg-unsplash.jpg';
      }
    });

  }

  ngOnInit() {
    console.log('loaded');
  }

  refresh() {
    location.reload(true);
  }

  geolocationError = () => {
    this.locationAccess = 'denied';
  }

  fetchWeatherData() {

    this.startLoader = true;
    this.touched = true;

    const apiKey = config.apiKey;

    console.log('Button has been clicked, fetch weather API data');
    // Use browser's built in geolocation API
    navigator.geolocation.getCurrentPosition((pos) => {
      this.weatherService.getWeatherInfo(pos.coords.latitude, pos.coords.longitude, 'metric', apiKey).subscribe(weatherInfo => {
        console.log(weatherInfo);
        this.startLoader = false;
        this.weatherInfo = weatherInfo;
        this.imgUrl = `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`

        // use weather description from weather api in unsplash api to get image matching the weather from unsplash
        let weatherDescription = weatherInfo.weather[0].main;
        let temp = weatherInfo.main.feels_like > 10;

        this.photoService.getRandomPhoto(temp ? 'warm ' + weatherDescription : 'cold ' + weatherDescription, 'landscape', 1).subscribe((data) => {
          const photoData = data;
          console.log('Photo_Data', photoData)
          this.photoUrl = photoData[0].urls.raw+`&w=${outerWidth}`;
        }, err => {
          console.log(err);
          if (err) {
            this.photoUrl = '../../assets/luca-bravo-zAjdgNXsMeg-unsplash.jpg';
          }
        });

        // Configure data 
      })
    }, this.geolocationError);

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
  }

  setBackground() {
    let styles = {};
    console.log(this.photoUrl);
    if (this.photoUrl.length > 0) {
      styles = {
      'background': `url(${this.photoUrl}) center/cover no-repeat fixed`
      };
    } else if (this.photoCollection.length === 3) {
      styles = {
      'background-image': `url(${this.photoCollection[0]}),  url(${this.photoCollection[1]}), url(${this.photoCollection[2]})`,
      'background-size': '33% 100%, 33% 100%, 33% 100%',
      'background-repeat': 'no-repeat, no-repeat, no-repeat',
      'background-position': 'left, center, right' 
      };
    }
    return styles;
  }

}
