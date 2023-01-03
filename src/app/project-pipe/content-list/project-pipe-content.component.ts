import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Course } from './../define/course.class';

@Component({
  selector: 'app-content-list',
  templateUrl: './project-pipe-content.component.html',
  styleUrls: ['./../project-pipe.component.scss'],
})
export class ProjectPipeListComponent implements OnInit {
  @Input('typeSummary') typeSummary: number;
  @Input('typeCurrency') typeCurrency: string;
  courses: Course[] = [];

  constructor() {
    this.courses.push(
      new Course(
        'c01',
        'lop php',
        10,
        'c01.jpg',
        'Là nơi cung cấp không gian lưu trữ và truy cập cho các website hoạt động trên internet. Đối tượng sử dụng Web Hosting là các cá nhân, tổ chức hay doanh nghiệp muốn sở hữu một website để giới thiệu về công ty, sản phẩm hoặc dịch vụ mà mình đang phân phối, nhằm cung cấp các thông tin đến khách hàng và đối tác trên internet.',
        [
          'php',
          'asp',
          'c++',
          'c++',
          'c++',
          'c++',
          'website',
          'app',
          'it',
          'php',
          'c++',
        ]
      )
    );

    this.courses.push(
      new Course(
        'c02',
        'lop java',
        20,
        'c02.jpg',
        'Là nơi cung cấp không gian lưu trữ và truy cập cho các website hoạt động trên internet. Đối tượng sử dụng Web Hosting là các cá nhân, tổ chức hay doanh nghiệp muốn sở hữu một website để giới thiệu về công ty, sản phẩm hoặc dịch vụ mà mình đang phân phối, nhằm cung cấp các thông tin đến khách hàng và đối tác trên internet.',
        [
          'php',
          'asp',
          'c++',
          'c++',
          'c++',
          'c++',
          'website',
          'app',
          'it',
          'php',
        ]
      )
    );
    this.courses.push(
      new Course(
        'c03',
        'lop html',
        30,
        'c03.jpg',
        'Là nơi cung cấp không gian lưu trữ và truy cập cho các website hoạt động trên internet. Đối tượng sử dụng Web Hosting là các cá nhân, tổ chức hay doanh nghiệp muốn sở hữu một website để giới thiệu về công ty, sản phẩm hoặc dịch vụ mà mình đang phân phối, nhằm cung cấp các thông tin đến khách hàng và đối tác trên internet.',
        ['website', 'app', 'it', 'php', 'web', 'asp', 'c++']
      )
    );
    this.courses.push(
      new Course(
        'c04',
        'lop SCSS',
        35,
        'c04.jpg',
        'Là nơi cung cấp không gian lưu trữ và truy cập cho các website hoạt động trên internet. Đối tượng sử dụng Web Hosting là các cá nhân, tổ chức hay doanh nghiệp muốn sở hữu một website để giới thiệu về công ty, sản phẩm hoặc dịch vụ mà mình đang phân phối, nhằm cung cấp các thông tin đến khách hàng và đối tác trên internet.',
        ['html', 'website', 'app', 'it', 'php', 'web', 'c++']
      )
    );
  }

  ngOnInit(): void {}
}
