// Akshat Dev

import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule to access Angular's common directives and pipes


@Component({
  selector: 'app-forecast',
  standalone: true, // Mark the component as standalone
  imports: [CommonModule], // Include CommonModule in imports for common Angular directives and pipes
  templateUrl: './forecast.component.html', // Path to the HTML template
  styleUrls: ['./forecast.component.scss'] // Path to the SCSS styles
})
export class ForecastComponent implements OnInit {
  @Input() forecast: any; // Input property to receive forecast data from a parent component

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can be placed here
  }
}
