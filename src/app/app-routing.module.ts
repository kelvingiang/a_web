import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ProductBuyComponent } from './product/product-buy.component';
import { GetDataComponent } from './get-data/get-data.component';
import { RatingComponent } from './rating/rating.component';
import { ServiceComponent } from './service/service.component';
import { FormComponent } from './form/form.component';
import { ParentListComponent } from './member/parent-list.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { AdminComponent } from './admin/admin.component';
// import { DirectiveComponent } from './directive/directive.component';
import { PipesComponent } from './pipe/pipes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard-main/dashboard.component';
import { ProjectPipeComponent } from './project-pipe/project-pipe.component';



const routes: Routes = [
  // khi nao vo trang chuyen ngay den trang duoc dịnh
  // { path: '', redirectTo: '/product', pathMatch: 'full' }, // TRANG MAC DINH KHI MOI
  // ROUTER CO CHUYEN THAM SO ======
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent }, // children: [{ path: ':id', component: ProductDetailComponent }],
  { path: 'product/:id', component: ProductDetailComponent }, //  children: [{ path: 'id', component: ProductDetailComponent }],
  { path: 'buy', component: ProductBuyComponent},//  children: [{ path: 'id', component: ProductDetailComponent }],
  { path: 'login', component: FormLoginComponent },
  { path: 'github', component: GetDataComponent },
  { path: 'rating', component: RatingComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'form', component: FormComponent },
  { path: 'member', component: ParentListComponent },
  { path: 'register', component: FormReactiveComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'project-pipe', component: ProjectPipeComponent },
  // { path: 'directive', component: DirectiveComponent},
  { path: '**', component: NotFoundComponent }, // CHUYEN VE TRANG 404 =====
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
