import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex3-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex3-demo.component.html',
  styleUrls: ['./ex3-demo.component.css']
})
export class DemoComponent {
  isRed = true;
  isBig = true;

  // ✅ Function that returns object for ngClass
  getNgClass() {
    return {
      redText: this.isRed,
      bigFont: this.isBig
    };
  }
}
