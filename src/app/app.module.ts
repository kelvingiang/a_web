import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { BookComponent } from './book/book.component';
import { ListComponent } from './list/list.component';
import { ParamComponent } from './param/param.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ChildItemComponent } from './parent-list/child-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    BookComponent,
    ListComponent,
    ParamComponent,
    ListItemComponent,
    ParentComponent,
    ChildComponent,
    ParentListComponent,
    ChildItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
