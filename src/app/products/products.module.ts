import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';


import { ProductsComponent } from './products.component';
import { RatingTwoComponent } from '../rating-two/rating-two.component';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsService } from './products.service';
import { RatingTwoService } from '../rating-two/rating-two.service';

import {NgNzAntdModule} from'../ant-nz.module';

@NgModule({
  declarations: [ProductsComponent, RatingTwoComponent],
  imports: [CommonModule, ShareModule, ProductsRoutingModule, NgNzAntdModule],
  providers: [ProductsService, RatingTwoService],
  exports:[],
})
export class ProductsModule {}
