import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductsComponent } from "./products.component";



const productsRouting : Routes=[
    {path: "products", component: ProductsComponent},
];

@NgModule({
    imports : [RouterModule.forChild(productsRouting)],
    exports :[RouterModule]
})

export class ProductsRoutingModule{}