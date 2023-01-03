import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
})
export class ServiceComponent implements OnInit {
  dataList: any[] = [];

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  loadPosts() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((Response: any) => {
        this.dataList = Response;
      });
  }
  ngOnInit(): void {}
}
