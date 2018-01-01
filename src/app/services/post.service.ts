import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AppError} from "../http-exercises/common/app.error";
import {NotFoundError} from "../http-exercises/common/not-found-error";
import {BadInputError} from "../http-exercises/common/bad-input-error";

@Injectable()
export class PostService {
  jsonPURL: string = "http://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) { }

  getAllPosts(){
   return this._http.get(this.jsonPURL)
     .catch(this.handleError);
  }

  createPost(postObj){
   return this._http.post(this.jsonPURL, JSON.stringify(postObj))
     .catch(this.handleError);
  }

  updatePost(postObj){
    return this._http.patch(this.jsonPURL +'/' + postObj.id , JSON.stringify({isRead: true}))
      .catch(this.handleError);
  }

  deletePost(id:number){
   return this._http.delete(this.jsonPURL +'/' + id )
     .catch(this.handleError);
  }

  private handleError(responseError: Response){
    if(responseError.status === 400 )
      return Observable.throw(new BadInputError(responseError.json()));

    if(responseError.status === 404)
      return Observable.throw(new NotFoundError());
    return Observable.throw(new AppError(responseError.json()));

  }

}
