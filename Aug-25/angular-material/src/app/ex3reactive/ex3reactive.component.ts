import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex3reactive',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ex3reactive.component.html',
  styleUrl: './ex3reactive.component.css'
})
export class Ex3reactiveComponent {
inputControl = new FormControl('');

  reversedValue: string = '';

  constructor() {
    this.inputControl.valueChanges.subscribe((value) => {
      if (value) {
        this.reversedValue = value.split('').reverse().join('');
      } else {
        this.reversedValue = '';
      }
    });
  }
}