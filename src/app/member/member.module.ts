import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgNzAntdModule } from '../ant-nz.module'
import { MemberRoutingModule } from './member-routing.module';
import { ShareModule } from "../share/share.module";

import { ParentListComponent } from './parent-list.component';
import { ChildItemComponent } from './child-item.component';


@NgModule({
    declarations: [
        ParentListComponent,
        ChildItemComponent,
    ],
    imports: [
        CommonModule, 
        NgNzAntdModule, 
        FormsModule, 
        ShareModule,
        MemberRoutingModule ],
    exports:[],
    providers:[],
})

export class MemberModule{}