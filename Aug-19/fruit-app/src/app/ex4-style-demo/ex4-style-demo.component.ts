import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex4-style-demo',   // 👈 is selector ka use karna hoga HTML me
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex4-style-demo.component.html',
  styleUrls: ['./ex4-style-demo.component.css']
})
export class Ex4StyleDemoComponent {
  isRed = true;
  isBig = true;

 
  getNgClass() {
    return {
      redText: this.isRed,
      bigFont: this.isBig
    };
  }

   
  getNgStyle() {
    return {
      'background-color': 'yellow',
      'padding': '10px',
      'border': '2px solid black'
    };
  }
}
