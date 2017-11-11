import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rkm-my-favorite',
  templateUrl: './my-favorite.component.html',
  styleUrls: ['./my-favorite.component.css']
})
export class MyFavoriteComponent implements OnInit {

  isFavorite = false;

  colors =[
    "purple",
    "orange",
    "yellow",
    "brown",
    "hot pink",
    "black",
    "green",
    "red"
  ]


  constructor() { }

  ngOnInit() {
  }

  
}
