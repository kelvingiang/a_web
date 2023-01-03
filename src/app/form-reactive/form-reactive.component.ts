import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent implements OnInit {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      memberCode: new FormControl(null, Validators.required),
      memberName: new FormControl('123-123', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }

  ngOnInit() {
    console.log('OnInit');
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      console.log('Please enter a valid');
      return;
    }
    console.log(this.registerForm.value);
  }
  ngOnDestroy() {
    console.log('onDestroy');
  }
}
