import { Component } from '@angular/core';

@Component({
  selector: 'app-thirdcomp',
  standalone: true,
  imports: [],
  template: `
    <div class="container mt-5">
      <h1 class="text-primary">Hello from Third Component!</h1>
      <p class="lead">This is an inline template using Bootstrap.</p>
      <button class="btn btn-success">Click Me</button>
    </div>
  `,
  styleUrls: ['./thirdcomp.component.css']
})
export class ThirdcompComponent { }
