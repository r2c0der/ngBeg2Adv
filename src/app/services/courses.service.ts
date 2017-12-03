import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getCourses(){
    return courses;

  }
}

const courses = [
  {
    id: 1,
    title: "The Illusion of the Boy ",
    students: 5890,
    rating: 8.5643,
    price: 98.09,
    releaseDate: new Date(2026, 3, 23)
  },
  {
    id: 2,
    title: "The Bloody Flame",
    students: 126,
    rating: 6.0491,
    price: 53.131,
    releaseDate: new Date(2031, 1, 17)
  },
  {
    id: 3,
    title: "The Sliver's Beginning ",
    students: 1518,
    rating: 5.484,
    price: 357.237,
    releaseDate: new Date(2116, 11, 2)
  },
  {
    id: 4,
    title: "Bring to the table win-win survival strategies ",
    students: 94545,
    rating: 4.6167,
    price: 60.553,
    releaseDate: new Date(2037, 9, 13)
  },
  {
    id: 5,
    title: "Nation Of Gold ",
    students: 2681,
   rating: 7.1514,
    price: 841.147,
   releaseDate: new Date(2033, 5, 27)
 }
]
