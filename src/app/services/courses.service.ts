import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  courses = ["Bring to the table win-win survival strategies. ", "A new normal that has evolved.", "Capitalize on low hanging fruit."];

  constructor() { }

  getCourses(){
    return this.courses;

  }
}
