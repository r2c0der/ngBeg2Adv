import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PostService {
  jsonPURL: string = "http://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) { }

  getAllPosts(){
   return this._http.get(this.jsonPURL);
  }

  createPost(postObj){
   return this._http.post(this.jsonPURL, JSON.stringify(postObj));
  }

  updatePost(postObj){
    return this._http.patch(this.jsonPURL +'/' + postObj.id , JSON.stringify({isRead: true}));
  }

  deletePost(id){
   return this._http.delete(this.jsonPURL +'/' + id );
  }

}
