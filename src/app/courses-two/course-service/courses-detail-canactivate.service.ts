import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesDetailCanActivateService implements CanActivate {
  constructor() {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route.url[2]);

    let id: string = route.url[2].path;
    if (id == '2') {
      alert('dong nay dang ap dung CanActivate khong co quyen truy cap ');
      return false;
    }
    return true;
  }
}
