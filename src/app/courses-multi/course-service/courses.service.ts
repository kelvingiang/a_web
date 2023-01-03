import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  courseList = [
    { id: 1, name: 'angular' },
    { id: 2, name: 'php' },
    { id: 3, name: 'java node' },
    { id: 4, name: 'java script' },
    { id: 5, name: 'react native' },
    { id: 6, name: 'react js' },
  ];

  courseDetails =[
    {
      id: 1,
      courseID: 1,
      name: "ANGULAR course",
      opening : "2022-02-10",
      description: "angular course description lorem 10  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime animi tempora voluptates qui voluptas iure totam amet, iusto quisquam! Odit, amet iusto voluptas deserunt id quibusdam dicta quam eius!",
    },
    {
      id: 2,
      courseID: 2,
      name: "PHP course",
      opening : "2022-02-17",
      description: "php course description lorem 10  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime animi tempora voluptates qui voluptas iure totam amet, iusto quisquam! Odit, amet iusto voluptas deserunt id quibusdam dicta quam eius!",
    },
    {
      id: 3,
      courseID: 3,
      name: "JAVA course",
      opening : "2022-04-20",
      description: "java course description lorem 10  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime animi tempora voluptates qui voluptas iure totam amet, iusto quisquam! Odit, amet iusto voluptas deserunt id quibusdam dicta quam eius!",
    },
    {
      id: 4,
      courseID: 4,
      name: "JAVA SCRIPT course",
      opening : "2022-08-28",
      description: "java script course description lorem 10  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime animi tempora voluptates qui voluptas iure totam amet, iusto quisquam! Odit, amet iusto voluptas deserunt id quibusdam dicta quam eius!",
    },
    {
      id: 5,
      courseID: 5,
      name: "REACT NATIVE course",
      opening : "2022-10-30",
      description: "react native course description lorem 10  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime animi tempora voluptates qui voluptas iure totam amet, iusto quisquam! Odit, amet iusto voluptas deserunt id quibusdam dicta quam eius!",
    },
    {
      id: 6,
      courseID: 6,
      name: "REACT JS course",
      opening : "2022-12-02",
      description: "react js description lorem 10  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime animi tempora voluptates qui voluptas iure totam amet, iusto quisquam! Odit, amet iusto voluptas deserunt id quibusdam dicta quam eius!",
    },
    {
      id: 7,
      courseID: 6,
      name: "REACT JS course nang cao",
      opening : "2022-12-02",
      description: "react js description lorem 10  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maxime animi tempora voluptates qui voluptas iure totam amet, iusto quisquam! Odit, amet iusto voluptas deserunt id quibusdam dicta quam eius!",
    }


  ]



  getCourseList() {
    return this.courseList;
  }


  getCourseDetail(courseID: number){
    let obj = this.courseDetails.filter((item) => item.courseID == courseID);
    return obj;
  }




}
