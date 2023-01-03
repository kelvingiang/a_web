import { Component } from '@angular/core';
@Component({
  selector: 'app-child-view-child',
  template: `<h3>{{ value }}</h3>`,
})
export class ChildFormParentComponent {
  value = 0;
}
