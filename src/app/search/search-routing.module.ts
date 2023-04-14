import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SearchComponent } from "./search.component";



const searchRouting : Routes=[
    {path: "searching", component: SearchComponent},
];

@NgModule({
    imports : [RouterModule.forChild(searchRouting)],
    exports :[RouterModule]
})

export class SearchRoutingModule{}