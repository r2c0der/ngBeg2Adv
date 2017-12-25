import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {JSONPlaceholderPostModel} from "../jsonplaceholder-post.model";

@Component({
  selector: 'rkm-jsonplaceholder-posts',
  templateUrl: './jsonplaceholder-posts.component.html',
  styleUrls: ['./jsonplaceholder-posts.component.css']
})
export class JSONPlaceholderPostsComponent implements OnInit {

  posts: any[];
  jsonPURL: string = "http://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http ) {
        _http.get(this.jsonPURL)
          .subscribe((response) => {
            this.posts = response.json();
            // console.log(response.json());
          });
  }

  ngOnInit() {
  }

  createPost(postTitle: HTMLInputElement){
    let post = {
      title: postTitle.value
    }
    postTitle.value = '';
    this._http.post(this.jsonPURL, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0,0, post);
        console.log(response.json());
      })

  }
}
