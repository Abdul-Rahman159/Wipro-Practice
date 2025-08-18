// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'secondApp'
//   name: string = 'Abdul';
//    printName() {
//    console.log("Entered Name:", this.name);
//     alert("You entered: " + this.name);
//   };
// }

// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
// import { ToggleMessageComponent } from './toggle-message/toggle-message.component';
// import { CountryListComponent } from "./country-list/country-list.component";

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, FormsModule, ToggleMessageComponent, CountryListComponent],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   names: string[] = ['Rahman', 'Sumaiya', 'Ali', 'Ayesha', 'Fatima'];
// }

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, FormsModule, CountryListComponent],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   names: string[] = ['Rahman', 'Sumaiya', 'Ali', 'Ayesha', 'Fatima'];
// }

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { SearchfilterComponent } from "./searchfilter/searchfilter.component";
// imports: [FormsModule]
// @Component({
//   selector: 'app-root',
//   imports: [FormsModule, SearchfilterComponent],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   color: string = 'default';  
//   selectedColor: string = "Black";   
// }


import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<app-home></app-home>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

