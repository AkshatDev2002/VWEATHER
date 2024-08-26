V-Weather

V-Weather is a weather dashboard application built with Angular. It provides current weather conditions and a 3-day weather forecast. The application includes features such as a search bar for entering a city or ZIP code and displays weather information using the WeatherAPI.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Components](#components)
- [Service](#service)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)
- [Architecture](#architecture)

## Installation 
To get started with V-Weather, follow these steps:



To set up the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/v-weather.git

2. Navigate to the project directory:
   ```bash
   cd v-weather

   
3. Install dependencies:
   Ensure you have Node.js and npm installed. Then, run:
      ```bash
   npm install

4. Environment Configuration:
   Create a .env file in the root directory and add your API key:
   API_KEY=your_api_key_here
   Alternatively, you can set up the environment in the environment.ts and environment.prod.ts files directly.

## Setup

1. Angular Application Configuration:

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service';
import { SearchComponent } from './components/search/search.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SearchComponent,
    CurrentWeatherComponent,
    ForecastComponent,
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
```

## Components

  1. search.component.ts: Component for searching weather by city or ZIP code.
```typescript
import { Component, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(location: string): void {
    if (location) {
      this.search.emit(location);
    }
  }
}

```
   
  2. current-weather.component.ts: Displays current weather conditions.
```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {
  @Input() currentWeather: any;
}

```

 3.  forecast.component.ts: Displays 3-day weather forecast.
```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  @Input() forecast: any;

  constructor() { }
}

```



## Services

weather.service.ts: Provides methods to fetch weather data from the API.
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  searchLocation(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search.json?key=${this.apiKey}&q=${query}`);
  }

  getCurrentWeather(location: string): Observable<any> {
    return this.http.get(`${this.apiUrl}current.json?key=${this.apiKey}&q=${location}`);
  }

  getForecast(location: string): Observable<any> {
    return this.http.get(`${this.apiUrl}forecast.json?key=${this.apiKey}&q=${location}&days=3`);
  }
}


```

## Styling
   Customize the scss files of all the components or root scss file as needed.



## Contribution
If you'd like to contribute to V-Weather, please fork the repository and submit a pull request. Make sure to include tests for any new features or bug fixes.



## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


## Architecture

The V-Weather application is structured as follows:

- **App Component (`app.component.ts`)**: Acts as the root component managing state and rendering child components.
- **Search Component (`search.component.ts`)**: Provides a user interface to input search queries.
- **Current Weather Component (`current-weather.component.ts`)**: Displays current weather information.
- **Forecast Component (`forecast.component.ts`)**: Displays a 3-day weather forecast.
- **Weather Service (`weather.service.ts`)**: Handles communication with the WeatherAPI.


Angular features used include:
- **Standalone Components**: Components are defined as standalone for easier management.
- **Reactive Programming**: Utilises RxJS for handling asynchronous data streams.
- **Angular Material**: Used for UI components and styling.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


