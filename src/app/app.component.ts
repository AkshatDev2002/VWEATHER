/* Akshat Dev */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { SearchComponent } from './components/search/search.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component'; // Import the CurrentWeatherComponent
import { ForecastComponent } from './components/forecast/forecast.component'; // Import the ForecastComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SearchComponent, // Include the SearchComponent here
    CurrentWeatherComponent, // Include the CurrentWeatherComponent here
    ForecastComponent, // Include the ForecastComponent here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'v-weather';
  currentWeather: any;
  forecast: any;

  constructor(private weatherService: WeatherService) {}

  fetchWeatherData(location: string): void {
    this.weatherService.getCurrentWeather(location).subscribe(data => {
      this.currentWeather = data;
    });

    this.weatherService.getForecast(location).subscribe(data => {
      this.forecast = data;
    });
  }
}
