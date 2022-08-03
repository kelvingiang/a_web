import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
})
export class ListItemComponent implements OnInit {
  @Input() name?: string;
  @Input() age?: number;
  constructor() {}

  ngOnInit(): void {}
}
