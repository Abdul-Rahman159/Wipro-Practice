import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchfilter',
  imports: [FormsModule],
  templateUrl: './searchfilter.component.html',
  styleUrl: './searchfilter.component.css'
})
export class SearchfilterComponent {
names: string[] = ['Jayanta', 'Jayaram', 'Rahul', 'Aman', 'Neha', 'Priya'];
  searchText: string = '';

  get filteredNames(): string[] {
    return this.names.filter(n =>
      n.toLowerCase().startsWith(this.searchText.toLowerCase())
    );
  }
}