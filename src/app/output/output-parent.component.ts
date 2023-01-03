import { Component } from '@angular/core';
@Component({
  selector: 'app-output-parent',
  template: `
    <h1>OutPut Decorator</h1>
    <h2>{{ value }}</h2>
    <app-output-child (clickMe)="changeValue($event)"></app-output-child>
  `,
})
export class OutputParentComponent {
  value = 0;
  changeValue($flag: boolean) {
    if ($flag) {
      this.value = this.value + 1;
    } else {
      this.value = this.value - 1;
    }
  }
}
