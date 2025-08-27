import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list'; 
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ex3reactiveComponent } from './ex3reactive/ex3reactive.component';
import { Ex4reactiveformComponent } from "./ex4reactiveform/ex4reactiveform.component";
import { Ex5reactiveformComponent } from "./ex5reactiveform/ex5reactiveform.component";

@Component({
  selector: 'app-root',
  imports: [Ex3reactiveComponent, Ex4reactiveformComponent, Ex5reactiveformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'City List';
  // cities: string[] = [
  //   'New York',
  //   'London',
  //   'Paris',
  //   'Tokyo',
  //   'Mumbai',
  //   'Sydney'
  // ];
formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup1 = this.fb.group({
      name: ['', Validators.required]
    });

    this.formGroup2 = this.fb.group({
      age: ['', [Validators.required, Validators.min(1)]]
    });

    this.formGroup3 = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
}