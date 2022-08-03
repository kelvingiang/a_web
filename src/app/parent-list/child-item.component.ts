import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
})
export class ChildItemComponent implements OnInit {
  @Input() name?: string;
  @Input() gender?: string;
  @Input() age?: number;
  @Output() removeMember = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  removeByClick() {
    this.removeMember.emit(this.name);
  }
}
