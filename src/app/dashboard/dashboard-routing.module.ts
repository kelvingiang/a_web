import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { CoursesComponent } from './course-list/courses.component';


const routes: Routes = [

//   { path: 'courses-multi-router/:id',  
//           component: CourseDetailComponent, 
//           children: [
//             {path: ''      , redirectTo: 'detail', pathMatch: 'full' },
//             {path: 'detail', component: CourseViewComponent},
//             {path: 'edit'  , component: CourseEditComponent},
//             {path: 'del'   , component: CourseDelComponent}
//           ]},
//   { path: 'courses-multi-router', component: CoursesComponent},
//   { path: 'multi-about', component: MultiRouterComponent, outlet:'second' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}