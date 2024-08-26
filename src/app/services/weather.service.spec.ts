// Akshat Dev

import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({});
    // Inject the WeatherService into the test environment
    service = TestBed.inject(WeatherService);
  });

  // Test to check if the WeatherService is created
  it('should be created', () => {
    // Expect the service to be truthy
    expect(service).toBeTruthy();
  });
});