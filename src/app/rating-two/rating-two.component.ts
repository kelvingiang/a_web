import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';
import { RatingTwoService } from './rating-two.service';

@Component({
  selector: 'app-rating-two',
  templateUrl: './rating-two.component.html',
})
export class RatingTwoComponent implements OnInit {
  ratingList;

  @Input() rating: number = -1;
  @Input() review: number = 0;

  onClick(ratingValue: number) {
    this.rating = ratingValue;
  }

  constructor(ratingListTwo: RatingTwoService) {
     this.ratingList = ratingListTwo.getList();
  
  }

  ngOnInit(): void {}
}
