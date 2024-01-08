import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {
  formHeading = 'Reactive Form';
  reactiveForm: FormGroup;
  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null),
      password: new FormControl(null, Validators.required),
    });
  }

  submitForm() {
    console.log('Form SUbmitted', this.reactiveForm);
  }
}
