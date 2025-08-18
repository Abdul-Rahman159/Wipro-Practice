import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
countries: string[] = ["India", "USA", "Germany", "Canada", "Australia"];
  loadedCountries: string[] = [];  

  loadCountries() {
    this.loadedCountries = this.countries;  
  }
}
