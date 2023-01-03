import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { FormsModule } from '@angular/forms';


import { ProjectPipeComponent } from './project-pipe.component';
import { ProjectPipeHeadComponent } from './head-control/project-pipe-header.component';
import { ProjectPipeListComponent } from './content-list/project-pipe-content.component';
import { ProjectContentItemComponent } from './content-item/project-pipe-item.component';

@NgModule({
  declarations: [
    ProjectPipeComponent,
    ProjectPipeHeadComponent,
    ProjectPipeListComponent,
    ProjectContentItemComponent,
  ],
  imports: [CommonModule, ShareModule, FormsModule],
  exports: [],
  providers: [],
})
export class ProjectPipeModule {}
