import { Component } from '@angular/core';
@Component({
  selector: 'app-parent',
  template: `
    <h2>{{ value }}</h2>
    <app-child (clickMe)="changeValue($event)"></app-child>
  `,
})
export class ParentComponent {
  value = 0;
  changeValue($flag: boolean) {
    if ($flag) {
      this.value = this.value + 1;
    } else {
      this.value = this.value - 1;
    }
  }
}
