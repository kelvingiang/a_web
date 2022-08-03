import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
})
export class ParentListComponent implements OnInit {
  memberList = [
    { id: 1, name: 'le van hung', age: 32, gender: 'female', join: true },
    { id: 2, name: 'tran thi hanh', age: 20, gender: 'male', join: true },
    { id: 3, name: 'nguen van tung', age: 25, gender: 'male', join: false },
    { id: 4, name: 'ly thi khang', age: 30, gender: 'female', join: true },
    { id: 5, name: 'lam thi tuan', age: 45, gender: 'female', join: false },
    { id: 6, name: 'ngo van bao', age: 50, gender: 'male', join: true },
  ];

  constructor() {}

  ngOnInit(): void {}

  removeMember(name: string) {
    console.log('removeMember', name);
    const index = this.memberList.findIndex((e) => e.name === name);
    this.memberList.splice(index, 1);
  }
}
