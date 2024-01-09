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
  // use credentianl object to show that how two way data binding works
  credential = { username: '', passowrd: '' };
  reactiveForm: FormGroup;
  ngOnInit() {
    console.warn(
      "ngModel with ReactiveForm is deprecated that's why this warning is coming"
    );

    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null),
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  //

  submitForm() {
    console.log('Form Submitted', this.reactiveForm, this.credential);
    alert('Form Submitted ');
  }
}
