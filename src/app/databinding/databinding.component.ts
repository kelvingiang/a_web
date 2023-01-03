import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  valueBinding: string = ' Data Binding Value';
  propertyBinding: string = 'http://loremflickr.com/150/150?random=2';

  value: string = '';
  inputEvent(event: any) {
    this.value = event.target.value;
  }

  twoway: string = '';

  inputValue: string = '';

  flag: boolean = false;
  styleBinding: string = '';

  inputStyle(event: any) {
    this.styleBinding = event.target.value;
    this.flag = this.styleBinding.length % 2 === 0 ? true : false;
  }

  constructor() {}

  ngOnInit(): void {}
}
