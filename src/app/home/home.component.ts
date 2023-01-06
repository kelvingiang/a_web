import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  size: NzButtonSize = 'large';
  isVisible = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  gotoLogin() 
  { this.router.navigate(['/login'])}

  gotoRating() {

    this.router.navigate(['/rating']);
   // this.router.navigate(['/']);  link to home page
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  }

