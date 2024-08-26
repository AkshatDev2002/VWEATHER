// Akshat Dev

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastComponent } from './forecast.component';

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  // Setup and configuration before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Import the component to be tested
      imports: [ForecastComponent]
    })
    .compileComponents(); // Compile the components

    // Create a fixture for the component and initialize it
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    
    // Trigger change detection to update the component
    fixture.detectChanges();
  });

  // Test case to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy(); // Expect the component instance to be truthy
  });
});
