import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
// import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  productList:any[];
  gray_active = true;
  loading = false;
  isList = false;
  // size: NzButtonSize = 'large';

  constructor(  productsService : ProductsService) {
    this.productList = productsService.getProducts();
  }

  ngOnInit() {
  }

  onClickMe($event: any) {
    this.gray_active = !this.gray_active; 
   // this.loading = !this.loading;
     }

  clickImg($event : any) {
    console.log($event.target.currentSrc);
  }

  changListStyle(val:string){
    if(val == 'list'){
      this.isList = true;
    }else if(val == 'table'){
      this.isList = false;
    }
  }
}
