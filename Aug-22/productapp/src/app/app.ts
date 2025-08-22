import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, RouterLink, CommonModule],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
protected title = 'productapp';
}