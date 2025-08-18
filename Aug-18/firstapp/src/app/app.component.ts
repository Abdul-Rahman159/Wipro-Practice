import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondcompComponent } from './secondcomp/secondcomp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SecondcompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstapp';
}
