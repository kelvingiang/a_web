import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./style-list.scss'],
})
export class ChildItemComponent implements OnInit {
  @Input() name?: string;
  @Input() gender?: string;
  @Input() age?: number;
  @Input() vip?: boolean;

  @Output() removeMember = new EventEmitter<string>();

  removeByClick() {
    this.removeMember.emit(this.name);
  }

  constructor() {}

  ngOnInit(): void {}
}
