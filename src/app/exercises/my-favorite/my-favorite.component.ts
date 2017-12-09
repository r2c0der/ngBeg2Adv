import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'rkm-my-favorite',
  templateUrl: './my-favorite.component.html',
  styleUrls: ['./my-favorite.component.css']
})
export class MyFavoriteComponent implements OnInit {



  colors = [
    {colorName: "purple",
      isFavorite: false },
    {colorName: "orange",
      isFavorite: false},
    {colorName: "lightgrey",
      isFavorite: false},
    {colorName: "brown",
      isFavorite: false},
    {colorName: "salmon",
      isFavorite: false},
    {colorName: "hotpink",
      isFavorite: false},
    {colorName: "black",
      isFavorite: false},
    {colorName: "green",
      isFavorite: false},
    {colorName: "red",
      isFavorite: false},
    {colorName: "navy",
      isFavorite: false},
    {colorName: "lime",
      isFavorite: false}


  ];



  constructor() { }

  ngOnInit() {
  }



  favoriteSelected(index: number){
    //console.log("Color selected by index: ", this.colors[index]);
     this.colors[index].isFavorite = !this.colors[index].isFavorite;


  }


}
