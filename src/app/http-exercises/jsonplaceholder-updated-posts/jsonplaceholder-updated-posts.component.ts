import { Component, OnInit } from '@angular/core';
import {JSONPlaceholderPostModel} from "../jsonplaceholder-post.model";
import {Http} from "@angular/http";

@Component({
  selector: 'rkm-jsonplaceholder-updated-posts',
  templateUrl: './jsonplaceholder-updated-posts.component.html',
  styleUrls: ['./jsonplaceholder-updated-posts.component.css']
})
export class JSONPlaceholderUpdatedPostsComponent implements OnInit {

  posts: JSONPlaceholderPostModel[];
  private JSONPUrl = "http://jsonplaceholder.typicode.com/posts"

  constructor(private _http: Http) { }

  ngOnInit() {
    this._http.get(this.JSONPUrl)
      .subscribe(response => {
        this.posts = response.json();
      });

  }

}
