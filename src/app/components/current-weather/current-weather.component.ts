// Akshat Dev

import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule to access Angular's common directives and pipes

@Component({
  selector: 'app-current-weather',
  standalone: true, // Indicates that this component is a standalone component
  imports: [CommonModule], // Include CommonModule in imports for common Angular directives and pipes
  templateUrl: './current-weather.component.html', // Path to the HTML template
  styleUrls: ['./current-weather.component.scss'] // Path to the SCSS styles
})
export class CurrentWeatherComponent implements OnInit {
  @Input() currentWeather: any; // Input property to receive current weather data from a parent component

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can be placed here
  }
}
