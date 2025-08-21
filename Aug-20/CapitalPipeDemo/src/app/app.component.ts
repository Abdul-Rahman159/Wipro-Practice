// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,FormsModule,CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   inputText: string = '';
// }

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet,FormsModule,CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
  //inputText: string = '';
//   selectedDate: string = '';
// }

// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CelsiusToFahrenheitPipe } from './celsius-to-fahrenheit.pipe';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule, CelsiusToFahrenheitPipe],
//   template: `
//     <div style="text-align:center; margin-top:50px;">
//       <h2>Enter Temperature in Celsius</h2>
//       <input type="number" [(ngModel)]="celsius" placeholder="Enter °C" />

//       <h3>Output:</h3>
//       <p>{{ celsius | celsiusToFahrenheit }}</p>
//     </div>
//   `
// })
// export class AppComponent {
//   celsius: number = 0;
// }

import { Component } from '@angular/core';
import { HighlightStrikethruDirective } from './highlight-strikethru.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HighlightStrikethruDirective],
  template: `
    <h2>Custom Directive Example</h2>
    <p highlightStrikethru>This text is highlighted in yellow and strikethrough.</p>
  `
})
export class AppComponent {}
