import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  // birthday = Date.now();
  // person = { name: 'John', age: '22' };
  // // neu data dc get tren server ve thuong a dang promise
  // address = '112 Ttran hung dao f.2, q.5 Tphcm';

  // slice: string = 'aabcdefhis';

  list: any={
    'id' :20,
    'name' : 'Angular and Typescript',
    'date' : new Date(),
    'price' :69.84578797,
    'require':['typescript','html','css','json']
  }

  percentA:number =0.1234567;
  percentB:number =2.123;

  numberArray :number[] =[1,3,8,4,6,7,9,2,5];
  description :string = 'Thuộc tính start của  gán bằng số nguyên, để thiết lập giá trị chỉ số của phần tử đầu tiên, mặc định là 1 (phần tử tiếp theo tăng giá trị 1 đơn vị). Trong vị dụ sau, bạn thử thay đổi thuộc tính start và type để xem kết quả trực tiếp. Ngoài ra bạn cũng thử cho thuộc tính reversed, kể cả thử cho thuộc tính value của';
  categoryArray: string[] = ['it', 'web', 'app', 'computer', 'it', 'app', 'ssd'];


  constructor() {}

  ngOnInit(): void {}
}
