import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";

import { CoursesService } from './course-service/courses.service'; 
import { CoursesDetailDeactivateService } from "./course-service/courses-detail-deactivate.service";
import {CoursesDetailCanActivateService} from "./course-service/courses-detail-canactivate.service";

import { CoursesComponent } from './course-list/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesTwoRoutingModule } from "./courses-two-routing.module";


@NgModule({
    declarations:[
        CoursesComponent,
        CourseDetailComponent
    ],
    imports:[
        CoursesTwoRoutingModule,
        ShareModule
    ],
    providers:[
        CoursesService,
        CoursesDetailDeactivateService,
        CoursesDetailCanActivateService
    ],
})

export class CoursesTwoModule{}