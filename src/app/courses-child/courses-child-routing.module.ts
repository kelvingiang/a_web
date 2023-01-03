import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './course-list/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseDelComponent } from './course-del/course-del.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseViewComponent} from './course-view/course-view.component';

const routes: Routes = [

  { path: 'courses-child-router/:id',  
          component: CourseDetailComponent, 
          children: [
            {path: ''      , redirectTo: 'detail', pathMatch: 'full' },
            {path: 'detail', component: CourseViewComponent},
            {path: 'edit'  , component: CourseEditComponent},
            {path: 'del'   , component: CourseDelComponent}
          ]},
  { path: 'courses-child-router', component: CoursesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesChildRoutingModule {}
