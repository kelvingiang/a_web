import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
})
export class ParamComponent implements OnInit {
  @Input() company?: string;
  @Input() address?: string;

  constructor() {}

  ngOnInit(): void {}
}
