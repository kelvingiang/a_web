import { Component } from '@angular/core';

@Component({
  //   template: '<h1> this is my first Angular project</h1>',
  templateUrl: './my.component.html',
  selector: 'my-word',
})
export class MyComponent {
  //== normal binding
  Name = 'le van hung';
  Age = 32;
  condition = true;
  arrList = ['php', 'C#', 'js', 'css', 'jsx'];

  // property binding
  imgSrc = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  hidden = false;

  showAndHide() {
    this.hidden = !this.hidden;
  }

  // event Binding
  something = '';

  showEvent(event: any) {
    this.something = event.target.value;
  }

  memberList = [
    { id: 1, name: 'le van hung', age: 32, gender: 'female' },
    { id: 2, name: 'tran thi hanh', age: 20, gender: 'male' },
    { id: 3, name: 'nguen van tung', age: 25, gender: 'male' },
    { id: 4, name: 'ly thi khang', age: 30, gender: 'female' },
    { id: 5, name: 'lam thi tuan', age: 45, gender: 'female' },
    { id: 6, name: 'ngo van bao', age: 50, gender: 'male' },
  ];

  memberName = '';
  memberAge = 0;
  memberGender = 'male';
  isShowForm = false;

  addMember() {
    this.memberList.unshift({
      id: this.memberList.length + 1,
      name: this.memberName,
      age: this.memberAge,
      gender: this.memberGender,
    });

    this.memberName = '';
    this.memberAge = 0;
    this.isShowForm = false;
  }
}
