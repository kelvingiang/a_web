import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html',
  providers: [SearchService],
})
export class SearchComponent implements OnInit {
  title = 'app';
  dataList: any = [];
  itemsPerPage = 3;
  totalPages = Math.ceil(this.dataList.length / this.itemsPerPage);
  currentPageIndex = 1;
  // form group
  form = new FormGroup({
    searchControl: new FormControl(),
    searchControl2: new FormControl(),
  });

  constructor(private _gitHubService: SearchService) {}

  ngOnInit() {
    this.loadData();

    // mới mở trang là cho chạy get data này
    this._gitHubService.getGithubData('greg').subscribe((data) => {
      this.dataList = data.items;
    });
  }

  loadData() {
    // khi trong form group dữ liệu có thể đổi hàm nay lập tức lấy dữ liệu
    this.form.valueChanges
      .pipe(
        filter((text) => text.searchControl.length > 3), // các chứ nhập vào phải trên ba mới bắt đầu chạy
        debounceTime(400), // thời gian nghi giữa các lần nhập
        distinctUntilChanged() // nếu gia tri trong khung input không thay đổi sẽ không chạy
      )
      .subscribe((x) => {
        // lấy dữ liệu nhập vào đây lên github để lấy dữ liệu trả về
        this._gitHubService.getGithubData(x.searchControl).subscribe((data) => {
          this.dataList = data.items;
        });
      });
  }

  onPageIndexChanged(pageIndex: number) {
    this.currentPageIndex = pageIndex;
  }
}
