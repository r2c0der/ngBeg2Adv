import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  isLiked: boolean = false;
  numberOfLikes: number = 0;

  

  constructor(likes?:number) {
    this.likeCount = likes;

  }

  ngOnInit() {
  }

  updateLikeCount(){
    this.numberOfLikes++;
    this.isLiked = !this.isLiked;
  }

  set likeCount(value){
    this.numberOfLikes = value;
  }
}
