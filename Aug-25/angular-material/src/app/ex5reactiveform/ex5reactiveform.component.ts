import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ex5reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './ex5reactiveform.component.html',
  styleUrl: './ex5reactiveform.component.css'
})
export class Ex5reactiveformComponent {
regForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.regForm = this.fb.group({
  name: ['', Validators.required],   
  email: ['', [Validators.required, Validators.email]],
  dob: ['', Validators.required],
  subject: ['', Validators.required]
});
  }

  onSubmit() {
    console.log(this.regForm.value);
  }
}