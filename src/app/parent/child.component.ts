import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  template: ` <button (click)="addToParent()">ADD</button>
    <button (click)="subToParent()">SUB</button>`,
})
export class ChildComponent {
  // khai bao <boolean> fucntion nay cho nhan tham so la boolean ===========
  @Output() clickMe = new EventEmitter<boolean>();

  addToParent() {
    this.clickMe.emit(true);
  }

  subToParent() {
    this.clickMe.emit(false);
  }
}
