import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log(this.form_email, this.form_password);
  }

  form_name: string = '';
  form_birthday: string = '';
  form_phone: number = 0;
  form_email: string = '';
  form_password: string = '';
  onNgFormSubmit(formSignIn: any) {
    console.log(formSignIn.value);
  }

  ngOnInit(): void {}
}
