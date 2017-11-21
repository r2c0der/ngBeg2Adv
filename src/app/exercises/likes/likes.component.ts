import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})

export class LikesComponent implements OnInit {
  btnClicked: boolean = false;
private newCount: number;
private startCount: number;
private buttonState: string = "Off";




  constructor(){}

  ngOnInit() {
  }

  private setCount(value){
    this.startCount = value;
    this.newCount = +this.startCount;
  }

  updateLikes(){

   if(this.btnClicked) {
      this.buttonState = "On"
      this.newCount++;
    } else {
      this.buttonState = "Off";
      this.newCount--;
    }


    this.btnClicked = !this.btnClicked;

  }


}
