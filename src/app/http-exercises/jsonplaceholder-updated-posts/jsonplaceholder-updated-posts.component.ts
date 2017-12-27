import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderPostModel } from "../jsonplaceholder-post.model";
import { PostService } from "../../services/post.service";

@Component({
  selector: 'rkm-jsonplaceholder-updated-posts',
  templateUrl: './jsonplaceholder-updated-posts.component.html',
  styleUrls: ['./jsonplaceholder-updated-posts.component.css']
})
export class JSONPlaceholderUpdatedPostsComponent implements OnInit {

  posts: JSONPlaceholderPostModel[];

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts()
      .subscribe(response => {
        this.posts = response.json();
      });

  }

}
