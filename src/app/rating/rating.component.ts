import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';
import { RatingService } from './rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {
  ratingList;

  @Input() rating: number = -1;
  @Input() review: number = 0;

  onClick(ratingValue: number) {
    this.rating = ratingValue;
  }

  constructor(ratingService: RatingService) {
    this.ratingList = ratingService.getList();
  }

  ngOnInit(): void {}
}
