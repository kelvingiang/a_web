import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { BookComponent } from './book/book.component';
import { ListComponent } from './list/list.component';
import { ParamComponent } from './param/param.component';
import { ListItemComponent } from './list-item/list-item.component';
import { OutputParentComponent } from './output/output-parent.component';
import { OutputChildComponent } from './output/output-child.component';
// import { ChildItemComponent } from './member/child-item.component';
import { ParentToChildComponent } from './view-child/parent.component';
import { ChildFormParentComponent } from './view-child/child.component';

// SERVE ===================================================
import { RatingService } from './rating/rating.service';
import { ProductService } from './product/product.service';

import { RoutingComponent } from './routing/routing.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

// content style ding san
import { cardContentComponent } from './ng-content/card-content.component';

// phan service
import { DatabindingComponent } from './databinding/databinding.component';

import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductBuyComponent } from './product/product-buy.component';
import { GetDataComponent } from './get-data/get-data.component';
import { RatingComponent } from './rating/rating.component';
import { ServiceComponent } from './service/service.component';
import { FormComponent } from './form/form.component';
// import { ParentListComponent } from './member/parent-list.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { AdminComponent } from './admin/admin.component';
import { PipesComponent } from './pipe/pipes.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
// import { ProjectPipeHeadComponent } from './project-pipe/head-control/project-pipe-header.component';


// import { DashboardComponent } from './dashboard/dashboard-main/dashboard.component';
// import { DashboardMenuComponent } from './dashboard/dashboard-menu/dashboard-menu.component';

// OTHER MODULE ====================================================
import { CoursesModule } from './courses/courses.module';
import { CoursesTwoModule } from './courses-two/courses-two.module';
import { CoursesChildModule } from './courses-child/courses-child.module';
import { CoursesMultiModule } from './courses-multi/courses-multi.module';
import { DashboardModule } from './dashboard/dashboard.module'
import { MemberModule } from './member/member.module';

// ANT UI DESIGN ========================================================
import {NgNzAntdModule} from'./ant-nz.module';

//---- ROUTER ==================================
import { AppRoutingModule } from './app-routing.module';
import { CoursesRoutingModule } from './courses/courses-routing.module';
import { CoursesTwoRoutingModule } from './courses-two/courses-two-routing.module';
import { CoursesChildRoutingModule } from './courses-child/courses-child-routing.module';
import { CoursesMultiRoutingModule } from './courses-multi/courses-multi-routing.module';
import { ShareModule } from "./share/share.module";
import { ProjectPipeModule } from './project-pipe/project-pipe.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);

@NgModule({
  declarations: [		
    PipesComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductBuyComponent,
    GetDataComponent,
    RatingComponent,
    ServiceComponent,
    FormComponent,
    //ParentListComponent,
    //ChildItemComponent,
    FormLoginComponent,
    FormReactiveComponent,
    AdminComponent,
    NotFoundComponent,
    AppComponent,
    MyComponent,
    BookComponent,
    ListComponent,
    ParamComponent,
    ListItemComponent,
    OutputParentComponent,
    OutputChildComponent,
    ParentToChildComponent,
    ChildFormParentComponent,
    cardContentComponent,
    DatabindingComponent,
    RoutingComponent,
    MainMenuComponent,
    HomeComponent,
   // ProjectPipeHeadComponent
  
   // DashboardComponent,
    // DashboardComponent,
   // DashboardMenuComponent
    
   ],
  imports: [
    BrowserModule,
    ShareModule,
    DashboardModule,
    CoursesMultiRoutingModule,
    CoursesMultiModule,
    CoursesChildRoutingModule,
    CoursesRoutingModule,
    CoursesTwoRoutingModule,
    CoursesModule,
    CoursesTwoModule,
    CoursesChildModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProjectPipeModule,
    NgNzAntdModule,
    MemberModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [ProductService, RatingService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
