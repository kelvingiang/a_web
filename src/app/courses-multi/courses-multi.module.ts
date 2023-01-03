import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";

import { CoursesService } from './course-service/courses.service'; 

import { CoursesComponent } from './course-list/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesMultiRoutingModule } from "./courses-multi-routing.module";


@NgModule({
    declarations:[
        CoursesComponent,
        CourseDetailComponent
    ],
    imports:[
        CoursesMultiRoutingModule,
        ShareModule
    ],
    providers:[
        CoursesService,
    ],
})

export class CoursesMultiModule{}