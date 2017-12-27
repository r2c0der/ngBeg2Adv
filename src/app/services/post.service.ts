import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class PostService {
  jsonPURL: string = "http://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) { }

  getPosts(){
   return this._http.get(this.jsonPURL);
  }

}
