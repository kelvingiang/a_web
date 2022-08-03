import { Component, OnInit } from '@angular/core';

@Component({
  //   template: '<h1> this is my first Angular project</h1>',
  templateUrl: './list.component.html',
  selector: 'app-list',
})
export class ListComponent {
  memberList = [
    { id: 1, name: 'le van hung', age: 32, gender: 'female', join: true },
    { id: 2, name: 'tran thi hanh', age: 20, gender: 'male', join: true },
    { id: 3, name: 'nguen van tung', age: 25, gender: 'male', join: false },
    { id: 4, name: 'ly thi khang', age: 30, gender: 'female', join: true },
    { id: 5, name: 'lam thi tuan', age: 45, gender: 'female', join: false },
    { id: 6, name: 'ngo van bao', age: 50, gender: 'male', join: true },
  ];

  memberName = '';
  memberAge = 0;
  memberGender = 'male';
  memberJoin = false;

  constructor() {}
  isShowForm = false;
  filterStatus = 'all';

  addMember() {
    this.memberList.unshift({
      id: this.memberList.length + 1,
      name: this.memberName,
      age: this.memberAge,
      gender: this.memberGender,
      join: this.memberJoin,
    });

    this.memberName = '';
    this.memberAge = 0;
    this.isShowForm = false;
  }

  removeMember(id: number) {
    const index = this.memberList.findIndex((member) => member.id === id);
    this.memberList.splice(index, 1);
  }

  getFilterGender(gender: string) {
    const all = this.filterStatus === 'all';
    const male = this.filterStatus === 'male' && gender === 'male';
    const female = this.filterStatus === 'female' && gender === 'female';
    return all || male || female;
  }
}
