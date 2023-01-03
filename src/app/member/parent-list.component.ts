import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./style-list.scss'],
})
export class ParentListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = '';
  age: number = 0;
  gender: string = 'female';
  vip: boolean = false;
  isShowForm: boolean = false;
  filterGender: string = 'all';
  trashStatus: boolean = false;


  memberList = [
    { id: 1, name: 'le van hung', age: 32, gender: 'female', vip: false },
    { id: 2, name: 'tran thi hanh', age: 20, gender: 'male', vip: false },
    { id: 3, name: 'nguen van tung', age: 25, gender: 'male', vip: true },
    { id: 4, name: 'ly thi khang', age: 30, gender: 'female', vip: false },
    { id: 5, name: 'lam thi tuan', age: 45, gender: 'female', vip: true },
    { id: 6, name: 'ngo van bao', age: 50, gender: 'male', vip: false },
  ];

  addMember() {
    this.memberList.unshift({
      id: this.memberList.length + 1,
      name: this.name,
      age: this.age,
      gender: this.gender,
      vip: this.vip,
    });
    // reset the member input =====
    this.name = '';
    this.age = 0;
    this.gender = '';
    this.isShowForm = false;
  }

  removeByClick(ID: number) {
    const index = this.memberList.findIndex((e) => e.id === ID);
    this.memberList.splice(index, 1);
  }


  removeMember(ID: number) {
    const index = this.memberList.findIndex((e) => e.id === ID);
    this.memberList.splice(index, 1);
  }

  toTrash(trash: boolean) {}

  clearInput() {
    this.age = 1;
  }

  // loc data theo gioi tinh ======
  filerShow(gender: string) {
    const showAll = this.filterGender === 'all';
    const showMale = this.filterGender === 'male' && gender == 'male';
    const showFemale = this.filterGender === 'female' && gender == 'female';
    return showAll || showMale || showFemale;
  }

  isTrash(trashStatus: boolean) {
    const showTrashItems = this.trashStatus;
    const hiddenTrashItems = !this.trashStatus;
    return showTrashItems || hiddenTrashItems;
  }
}
