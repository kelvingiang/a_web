import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./style-list.scss'],
})
export class ParentListComponent implements OnInit {
  name: string = '';
  age: number = 10;
  gender: string = 'female';
  addGender: string = 'male';
  filterGender: string = 'all'; // first load select input get genderList the id show in it
  vip: string = '';
  isHeader: boolean = true;
  isShowForm: boolean = false;
  isShowEditFrom: boolean = false;
  trashStatus: boolean = false;
  showMember: any;
  memberInfo: any;
  memberUpdateGender: string = '';
  memberUpdateVip: string = '';
  isSort: boolean = false;

  memberList = [
    { id: 1, name: 'le van hung', age: 32, gender: 'female', vip: '0' },
    { id: 2, name: 'tran thi hanh', age: 20, gender: 'male', vip: '1' },
    { id: 3, name: 'nguen van tung', age: 25, gender: 'male', vip: '0' },
    { id: 4, name: 'ly thi khang', age: 30, gender: 'female', vip: '0' },
    { id: 5, name: 'lam thi tuan', age: 45, gender: 'female', vip: '1' },
    { id: 6, name: 'ngo van bao', age: 50, gender: 'male', vip: '0' },
  ];

  genderList = [
    { id: 'all', gender: 'All' },
    { id: 'male', gender: 'Male' },
    { id: 'female', gender: 'Female' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.showMember = this.memberList;
  }

  // sắp xếp số tuổi tăng hoặc giảm dần
  sortAge() {
    if (this.isSort) {
      this.showMember.sort((a: any, b: any) => (a.age > b.age ? 1 : -1));
      this.isSort = !this.isSort;
    } else {
      this.showMember.sort((a: any, b: any) => (a.age < b.age ? 1 : -1));
      this.isSort = !this.isSort;
    }
  }

  // kiểm tra khi nhập chỉ cho phép nhập số nguyên
  keyPress(event: any) {
    const pattern = /[0-9\+\-]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  // thêm thành viên
  addMember() {
    this.memberList.unshift({
      id: this.memberList.length + 1,
      name: this.name,
      age: this.age,
      gender: this.addGender,
      vip: this.vip,
    });
    // reset the member input =====
    this.name = '';
    this.age = 10;
    this.isShowForm = false;
  }

  // lấy thông tin 1 thành viên
  editMember(ID: number) {
    const member = this.showMember.find((e: any) => e.id === ID);
    this.memberInfo = member;
    this.isShowEditFrom = true;
    this.isHeader = false;
    this.memberUpdateVip = '';
    this.memberUpdateGender = '';
    console.log(member);
  }

  saveUpdateMember(id: number, txt_name: string, txt_age: string) {
    const updatedArr = this.showMember.map((obj: any) => {
      if (obj.id === id) {
        this.memberUpdateGender =
          this.memberUpdateGender === '' ? obj.gender : this.memberUpdateGender;
        this.memberUpdateVip =
          this.memberUpdateVip === '' ? obj.vip : this.memberUpdateVip;

        return {
          ...obj,
          name: txt_name,
          age: txt_age,
          gender: this.memberUpdateGender,
          vip: this.memberUpdateVip,
        };
      }
      return obj;
    });
    this.showMember = updatedArr;
    this.isShowEditFrom = false;
    this.isHeader = true;
  }

  cancelUpdateMember() {
    this.isHeader = true;
    this.isShowEditFrom = false;
  }

  // xóa 1 thành viên
  removeMember(ID: number) {
    const index = this.showMember.findIndex((e: any) => e.id === ID);
    this.showMember.splice(index, 1);
  }

  // hiển thi giời tính theo lựa chọn
  selFilterGender(value: string) {
    if (value !== 'all') {
      this.showMember = this.memberList.filter(
        ({ gender }) => gender === value
      );
    } else {
      this.showMember = this.memberList;
    }

    // inventory.find(({ name }) => name === "cherries");
  }

  genderChange(event: string) {
    this.memberUpdateGender = event;
  }

  vipChange(event: string) {
    this.memberUpdateVip = event;
  }
}
