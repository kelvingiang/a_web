import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  @ViewChild('loginForm')
  loginForm!: NgForm;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    if (!this.loginForm.valid) {
      console.log('Invalid Data');
      return;
    }
    console.log(this.loginForm.value);
  }
}
