import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ex4reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './ex4reactiveform.component.html',
  styleUrl: './ex4reactiveform.component.css'
})
export class Ex4reactiveformComponent {
fg: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      subject: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log("onSubmit");
    if (this.fg.valid) {
      console.log("form submitted", this.fg.value);
    }
  }
}