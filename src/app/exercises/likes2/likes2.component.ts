import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rkm-likes2',
  templateUrl: './likes2.component.html',
  styleUrls: ['./likes2.component.css']
})
export class Likes2Component implements OnInit {

  isLiked: boolean = false;
  likes2Count: number = 0;
  constructor() { }

  ngOnInit() {
  }

  countLikes(){
     this.isLiked = !this.isLiked;
     this.isLiked ? this.likes2Count++ : this.likes2Count--;

  }

}
