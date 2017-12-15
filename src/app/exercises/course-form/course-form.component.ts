import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rkm-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  courseCategories = [
    {
      courseID: 1,
      courseType: 'Day'
    },
    {
      courseID: 2,
      courseType: 'Professional Development'
    },
    {
      courseID: 3,
      courseType: 'Weekend'
    },
    {
      courseID: 4,
      courseType: 'Evening'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  formSubmit(formObj){
    console.log(formObj);

  }

}
