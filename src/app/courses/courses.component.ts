import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../services/courses.service";

@Component({
  selector: 'rkm-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title: string = "List of Courses";
  courses: any[];

  constructor(private _courses:CoursesService) { }


  ngOnInit() {
    this.courses = this._courses.getCourses();
  }

}
