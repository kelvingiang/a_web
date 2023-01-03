import { Component, Input, OnInit, ViewEncapsulation  } from '@angular/core';
import { Course } from '../define/course.class';

@Component({
    selector: 'Dgw-course-item',
    templateUrl: './project-pipe-item.component.html',
    styleUrls: ['./../project-pipe.component.scss'],
    encapsulation: ViewEncapsulation.None, // them khi innerHTML phai them giong nay de ap dung dc css

})
export class ProjectContentItemComponent implements OnInit {
    
    @Input("course") courseObj : Course ;
    @Input('typeSummary') typeSummary: number;
    @Input('typeCurrency') typeCurrency: string;

    summaryCount:number = 0;
    

    constructor() {
   
     }

    ngOnInit(): void { }
}
