import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot,  } from '@angular/router';
import { CourseDetailComponent } from '../course-detail/course-detail.component';

@Injectable({
  providedIn: 'root', 
})

export class CoursesDetailDeactivateService implements CanDeactivate<CourseDetailComponent> {
  constructor() {}


  canDeactivate(
    component: CourseDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean {
    return component.allow;
  }
}