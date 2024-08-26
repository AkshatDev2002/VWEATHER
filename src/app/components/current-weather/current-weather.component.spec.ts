// Akshat Dev

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentWeatherComponent } from './current-weather.component';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  // Setup and configuration before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Import the component to be tested
      imports: [CurrentWeatherComponent]
    })
    .compileComponents(); // Compile the components

    // Create a fixture for the component and initialize it
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    
    // Trigger change detection to update the component
    fixture.detectChanges();
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Expect the component instance to be truthy
  });
});
