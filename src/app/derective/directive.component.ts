import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  //styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  bgColor = '';

  flag: boolean = false;
  styleOne = { color: 'red', fontSize: '2rem' };
  styleTwo = { color: 'yellow', fontSize: '5rem' };

  toggleClick() {
    this.flag = !this.flag;
  }

  constructor() {}

  ngOnInit(): void {}
}
