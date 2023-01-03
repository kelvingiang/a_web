import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  gotoLogin() 
  { this.router.navigate(['/login'])}

  gotoRating() {

    this.router.navigate(['/rating']);
   // this.router.navigate(['/']);  link to home page
  }
  }

