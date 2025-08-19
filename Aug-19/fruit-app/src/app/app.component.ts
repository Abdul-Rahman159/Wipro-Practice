// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { DisplayListComponent } from "./display-list/display-list.component";

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, DisplayListComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'fruit-app';
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from "./ex3-demo/ex3-demo.component";
import { Ex4StyleDemoComponent } from "./ex4-style-demo/ex4-style-demo.component";
import { HomeComponent } from "./home/home.component";     

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DemoComponent, Ex4StyleDemoComponent, HomeComponent],    
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRed = true;
  isBig = false;
}

