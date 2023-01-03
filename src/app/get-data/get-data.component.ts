import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css'],
})
export class GetDataComponent implements OnInit {
  searchControl = new FormControl();

  constructor() {}

  ngOnInit() {
    //su kien observable
    // ap dung pipe de them 1 so su kien observable filter tren 3 ky tu moi tien hanh tim kiem
    // filter tren 3 ky tu moi thuc thi
    // debounceTime dinh thoi gian nguong de thuc thi tranh viec nhap lieu nhanh va thuc thi nhieu lan
    // distinctUntilChanged khi ky tu co the doi moi thuc thi
    this.searchControl.valueChanges
      .pipe(
        filter((text) => text.length >= 3),
        debounceTime(400),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        console.log(value);
      });
  }
}
