import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList:any[];
  constructor(  productsService : ProductsService) {
    this.productList = productsService.getProducts();
  }

  ngOnInit() {
  }

}
