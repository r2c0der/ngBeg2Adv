import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {JSONPlaceholderPostModel} from "../jsonplaceholder-post.model";
import {post} from "selenium-webdriver/http";

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

  updatePost(postObj){
  /*
  DIFFERENCE BETWEEN PATCH and PUT
  this._http.patch(this.jsonPURL, JSON.stringify({property: value}));
    this._http.put(this.jsonPURL, JSON.stringify(postObj));*/

  this._http.patch(this.jsonPURL +'/' + postObj.id , JSON.stringify({isRead: true}))
    .subscribe(response => {
      console.log(response.json());
    })

  }

  deletePost(postObj){
    this._http.delete(this.jsonPURL +'/' + postObj.id )
      .subscribe(response => {
        let index = this.posts.indexOf(postObj);
        console.log(index);
        console.log(postObj[index])
         this.posts.splice(index, 1);
      });

  }
}
