import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CourseDetailComponent implements OnInit {

  courseDetail: any;
  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {
   
   }

  ngOnInit() {
    let id :number = this.activatedRoute.snapshot.params['id'];
    this.courseDetail = this.coursesService.getCourseDetail(id);
  }

  backToCourses(){
    this.router.navigate(['/courses']);
  }


}
