import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoursesService } from '../course-service/courses.service';

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
  }

  viewDetail(courseID: number) {
    // CO 3 CACH CHUYEN NHU SAU
    this.router.navigate(['courses-two/course/'+courseID],
    { queryParams: {serial: 'ma-lop', courseID: courseID}});
   // this.router.navigateByUrl('courses-two/course/' + courseID);
   // this.router.navigateByUrl(`courses-two/course/${courseID}`);
  }
}
