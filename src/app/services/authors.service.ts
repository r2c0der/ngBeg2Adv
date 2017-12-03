import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  authors = [
    "Nicolas Arena",
    "Hyacinthe Bucci",
    "Izak Shelby",
    "Terry Litton",
    "Byran Keithley",
    "Kati Presley"
    ]
  constructor() { }

  getAuthors(){
  return this.authors;
  }

}
