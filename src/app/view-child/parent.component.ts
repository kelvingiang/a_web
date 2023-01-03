import { Component, ViewChild } from '@angular/core';
import { ChildFormParentComponent } from './child.component';
@Component({
  selector: 'app-parent-view-child',
  template: `
    <h3>use viewChild</h3>
    <button (click)="onChangChildVal()">send value to Child cach</button>
    <app-child-view-child></app-child-view-child>
  `,
})
export class ParentToChildComponent {
  @ViewChild(ChildFormParentComponent)
  child!: ChildFormParentComponent;

  onChangChildVal() {
    this.child.value++;
  }
}
