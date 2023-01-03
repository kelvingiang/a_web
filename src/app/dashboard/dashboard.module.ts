import { NgModule } from "@angular/core";
import { ShareModule } from "../share/share.module";
import { DashboardRoutingModule} from "./dashboard-routing.module";


import { DashboardComponent } from './dashboard-main/dashboard.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { DashboardFirstContentComponent } from "./dashboard-content/dashboard-first.component";
import { DashboardSecondContentComponent } from "./dashboard-content/dashboard-second.component";
import { DashboardThirdContentComponent } from "./dashboard-content/dashboard-third.component";


@NgModule({
    declarations:[
       DashboardComponent,
       DashboardMenuComponent,
       DashboardFirstContentComponent,
       DashboardSecondContentComponent,
       DashboardThirdContentComponent,
    ],
    imports:[
        DashboardRoutingModule,
        ShareModule
    ],
    // providers:[
    //     CoursesService,
    // ],
})

export class DashboardModule{}