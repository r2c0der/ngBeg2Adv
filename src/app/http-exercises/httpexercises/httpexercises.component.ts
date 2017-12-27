import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpexercises',
  templateUrl: './httpexercises.component.html',
  styles: [
    `

      .title_original{
        font-family: 'Berkshire Swash', sans-serif;
        color: navy;

      }

      .title_modified {
        font-family: "Encode Sans Expanded", cursive;
        color: darkred;

      }

    `
  ]
})
export class HTTPExercisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
