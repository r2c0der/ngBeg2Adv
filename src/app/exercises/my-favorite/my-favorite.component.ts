import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'rkm-my-favorite',
  templateUrl: './my-favorite.component.html',
  styleUrls: ['./my-favorite.component.css']
})
export class MyFavoriteComponent implements OnInit {

  isFavorite: boolean;

  colors = [
    "purple",
    "orange",
    "yellow",
    "brown",
    "hotpink",
    "black",
    "green",
    "red"
  ]


  constructor() { }

  ngOnInit() {
  }


  favoriteSelected(){

       this.isFavorite = !this.isFavorite;


  }


}
