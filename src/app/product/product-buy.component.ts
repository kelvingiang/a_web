import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-buy.component.html',
})
export class ProductBuyComponent implements OnInit {
  productID: string = '';
  constructor(private _router: ActivatedRoute) {
    // if (_router.snapshot.params['id']) {
    //   this.productID = _router.snapshot.params['id'];
    // }
  }

  ngOnInit() {
    this._router.params.subscribe((params) => {
      this.productID = params['id'];
    });
  }
}
