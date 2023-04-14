import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';


import { SearchComponent } from './search.component';

import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    NzInputModule,
    NzPaginationModule
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
