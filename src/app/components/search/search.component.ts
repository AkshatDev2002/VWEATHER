// Akshat Dev

import { Component, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true, // Mark the component as standalone
  imports: [
    CommonModule, // Import CommonModule for common Angular directives
    MatFormFieldModule, // Import Material Form Field module
    MatInputModule, // Import Material Input module
    MatButtonModule // Import Material Button module
  ],
  templateUrl: './search.component.html', // Path to the component's HTML template
  styleUrls: ['./search.component.scss'] // Path to the component's SCSS styles
})

export class SearchComponent {
  @Output() search = new EventEmitter<string>(); // Event emitter to emit search terms

  /**
   * Emits the search term entered by the user.
   * @param location The location entered by the user.
   */
  onSearch(location: string): void {
    if (location) { // Check if the location is not empty
      this.search.emit(location); // Emit the search term
    }
  }
}
