import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService,} from '../course-service/courses.service';
import { Router, ActivatedRoute, Params,} from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-courses-detail',
  templateUrl: './course-view.component.html',
  styleUrls: ['../style/courses.component.scss'],
})
export class CourseViewComponent implements OnInit, OnDestroy {
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
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    // this.courseID = this.activatedRoute.snapshot.params['id'];
    // this.courseDetail = this.coursesService.getCourseDetail(this.courseID);
  

    // de lay va gia tri params tuc thoi de cap nhat phai viet nhu sau

    this.subscriptionParams = this.activatedRoute.parent.params.subscribe(
    // cach lay params =====================================
   
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


  backToCourses() {
    this.router.navigate(['/courses-multi-router']);
  }

  /*
  khi thoat khoai trang ta giai phong cac subscription de giai bo nho ====================================
   */
  ngOnDestroy() {
    this.subscriptionParams.unsubscribe();
    this.subscriptionQueryParams.unsubscribe();
  }
}
