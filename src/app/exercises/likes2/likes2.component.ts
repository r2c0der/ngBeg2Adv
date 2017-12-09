import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rkm-likes2',
  templateUrl: './likes2.component.html',
  styleUrls: ['./likes2.component.css']
})
export class Likes2Component implements OnInit {

 @Input('isLiked') isLiked: boolean;
 @Input('likes2TotalCount') likes2TotalCount: number;

  constructor() { }

  ngOnInit() {
  }

  postState(){
    this.isLiked = !this.isLiked;
    this.isLiked ? this.likes2TotalCount++ : this.likes2TotalCount--;


  }


}
