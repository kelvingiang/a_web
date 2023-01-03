import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../course-service/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['../style/courses.component.scss'],
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
  }

  // CO 3 CACH CHUYEN NHU SAU ==================================================
  viewDetail(courseID: number) {
    this.router.navigate(['courses-multi-router/'+courseID])
  }

  viewEdit(courseID: number) {
    this.router.navigateByUrl('courses-multi-router/' + courseID +'/edit(second:multi-about)');
  }

  viewDel(courseID: number) {
    this.router.navigateByUrl(`courses-multi-router/${courseID}/del`);
  }
}
