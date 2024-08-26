// Akshat Dev

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // Import the environment file

@Injectable({
  providedIn: 'root' // Register the service with the root injector
})
export class WeatherService {

  // Inject HttpClient into the service
  constructor(private http: HttpClient) {}

  // Base URL for the weather API from environment configuration
  private apiUrl = environment.apiUrl;
  // API key for authentication from environment configuration
  private apiKey = environment.apiKey;

  /**
   * Search for locations based on a query.
   * @param query The search term (city name, ZIP code, etc.).
   * @returns An Observable containing the search results.
   */
  searchLocation(query: string): Observable<any> {
    // Construct the URL and make the HTTP GET request
    return this.http.get(`${this.apiUrl}/search.json?key=${this.apiKey}&q=${query}`);
  }

  /**
   * Get current weather information for a specific location.
   * @param location The location for which to retrieve weather data.
   * @returns An Observable containing the current weather data.
   */
  getCurrentWeather(location: string): Observable<any> {
    // Construct the URL and make the HTTP GET request
    return this.http.get(`${this.apiUrl}current.json?key=${this.apiKey}&q=${location}`);
  }

  /**
   * Get a 3-day weather forecast for a specific location.
   * @param location The location for which to retrieve weather forecast data.
   * @returns An Observable containing the weather forecast data.
   */
  getForecast(location: string): Observable<any> {
    // Construct the URL and make the HTTP GET request
    return this.http.get(`${this.apiUrl}forecast.json?key=${this.apiKey}&q=${location}&days=3`);
  }
}
