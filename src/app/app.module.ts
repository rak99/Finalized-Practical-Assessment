import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule, MatIconModule, MatButtonModule
} from '@angular/material'
import { WeatherService } from './services/weather.service';
import { WeatherApi } from './weather.api.class';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [WeatherService, WeatherApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
