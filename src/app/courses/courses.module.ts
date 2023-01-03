import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";


import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail.component';
import { CoursesService } from './courses.service'; 
import { CoursesRoutingModule } from "./courses-routing.module";


@NgModule({
    declarations:[
        CoursesComponent,
        CourseDetailComponent
    ],
    imports:[
        CoursesRoutingModule,
        ShareModule
    ],
    providers:[
        CoursesService
    ],
})

export class CoursesModule{}