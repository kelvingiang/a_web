import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ParentListComponent } from "./parent-list.component";

const memberRouting : Routes=[
    {path: "member", component: ParentListComponent},
];

@NgModule({
    imports : [RouterModule.forChild(memberRouting)],
    exports :[RouterModule]
})

export class MemberRoutingModule{}