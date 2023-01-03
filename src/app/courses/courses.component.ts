import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courseList: any;
  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.courseList = this.coursesService.getCourseList();
    console.log(this.courseList);
  }

  viewDetail(courseID: number) {
    this.router.navigate(['courses/course/'+courseID]);
  }
}
