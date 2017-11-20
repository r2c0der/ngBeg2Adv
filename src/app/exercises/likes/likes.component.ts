import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})

export class LikesComponent implements OnInit {
  btnClicked: boolean = false;
private _newCount: number;
private _startCount: number;
private _buttonState: string = "Off";




  constructor(){}

  ngOnInit() {
  }

  private setCount(value){
    this._startCount = value;
    this._newCount = this._startCount;
  }

  updateLikes(){

   if(this.btnClicked) {
      this._buttonState = "On"
      this._newCount++;
    } else {
      this._buttonState = "Off";
      this._newCount--;
    }


    this.btnClicked = !this.btnClicked;

  }


}
