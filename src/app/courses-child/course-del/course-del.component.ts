import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../course-service/courses.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './course-del-component.html',
  styleUrls: ['../style/courses.component.scss'],
})
export class CourseDelComponent implements OnInit {
  courseDetail: any;
  courseID: number = 0;
  subscriptionParams: Subscription = new Subscription();
  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.subscriptionParams = this.activatedRoute.parent.params.subscribe(
      // cach lay params =====================================
     
        (params: Params) => {
          this.courseID = parseInt(params['id']);
          this.courseDetail = this.coursesService.getCourseDetail(this.courseID);
        }
      );
  }


  backToCourses() {
    this.router.navigate(['/courses-child-router']);
  }


}
