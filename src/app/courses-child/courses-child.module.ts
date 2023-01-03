import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";

import { CoursesService } from './course-service/courses.service'; 

import { CoursesComponent } from './course-list/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesChildRoutingModule } from "./courses-child-routing.module";


@NgModule({
    declarations:[
        CoursesComponent,
        CourseDetailComponent
    ],
    imports:[
        CoursesChildRoutingModule,
        ShareModule
    ],
    providers:[
        CoursesService,
    ],
})

export class CoursesChildModule{}