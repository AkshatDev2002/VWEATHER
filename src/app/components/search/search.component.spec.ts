// Akshat Dev

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    // Configure testing module
    await TestBed.configureTestingModule({
      imports: [SearchComponent] // Import the SearchComponent for testing
    })
    .compileComponents(); // Compile the components

    // Create a fixture for the SearchComponent
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance; // Get an instance of the component
    fixture.detectChanges(); // Trigger change detection
  });

  // Test to check if the component is created
  it('should create', () => {
    expect(component).toBeTruthy(); // Expect the component to be truthy
  });
});
