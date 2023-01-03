import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  onClickMe($event: object) {
    console.log($event);
  }

  products;
  constructor(productService: ProductService, private router: Router) {
    this.products = productService.getProducts();
  }

  onClick() {
    this.router.navigate(['buy']);
  }
  ngOnInit(): void {}
}
