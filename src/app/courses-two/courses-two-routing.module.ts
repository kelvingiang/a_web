import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesDetailDeactivateService } from './course-service/courses-detail-deactivate.service';
import { CoursesDetailCanActivateService } from './course-service/courses-detail-canactivate.service';

import { CoursesComponent } from './course-list/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  {
    path: 'courses-two',
    component: CoursesComponent,
   
  },
  {
    path: 'courses-two/course/:id',
    component: CourseDetailComponent,
    canDeactivate: [CoursesDetailDeactivateService],
    canActivate: [CoursesDetailCanActivateService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesTwoRoutingModule {}
