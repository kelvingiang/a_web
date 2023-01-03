import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../course-service/courses.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['../course-list/courses.component.scss'],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  courseDetail: any;
  courseList: any;
  courseID: number = 0;
  subscriptionParams: Subscription = new Subscription();
  subscriptionQueryParams: Subscription = new Subscription();
  serial: string = '';
  page: number = 0;
  allow: boolean = false;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.courseID = this.activatedRoute.snapshot.params['id'];
    // this.courseDetail = this.coursesService.getCourseDetail(this.courseID);
    this.courseList = this.coursesService.getCourseList();

    // de lay va gia tri params tuc thoi de cap nhat phai viet nhu sau

    // cach lay params =====================================
    this.subscriptionParams = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.courseID = parseInt(params['id']);
        this.courseDetail = this.coursesService.getCourseDetail(this.courseID);
      }
    );

    // cach lay cac queryParams  =============
    this.subscriptionQueryParams = this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        this.serial = params['serial'];
        this.page = params['page'];
      }
    );
  }

  setAllow(event: any) {
    if (event.target.value.toLowerCase() === 'ok') {
      this.allow = true;
    }
   
  }

  prev() {
    console.log(this.courseID);
    this.router.navigate(['courses-two/course/', this.courseID - 1]);
  }

  next() {
    console.log(this.courseID);
    this.router.navigate(['courses-two/course/', this.courseID + 1]);
  }

  viewDetail(courseID: number) {
    // CO 3 CACH CHUYEN NHU SAU
    // this.router.navigate(['courses-two/course/', courseID]);
    // this.router.navigateByUrl('courses-two/course/' + courseID);
    this.router.navigateByUrl(`courses-two/course/${courseID}`);
  }

  backToCourses() {
    this.router.navigate(['/courses-two']);
  }

  /*
  khi thoat khoai trang ta giai phong cac subscription de giai bo nho ====================================
   */
  ngOnDestroy() {
    this.subscriptionParams.unsubscribe();
    this.subscriptionQueryParams.unsubscribe();
  }
}
