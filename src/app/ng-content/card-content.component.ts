import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-content',
  template: `
    <div class="article-space">
      <div class="header">
        <ng-content select=".article-header"></ng-content>
      </div>
      <div class="body">
        <ng-content select=".article-body"></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./style-content.component.css'],
})
export class cardContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
