import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import {AppError} from "../http-exercises/common/app.error";
import {NotFoundError} from "../http-exercises/common/not-found-error";
import {BadRequestError} from "../http-exercises/common/bad-request-error";

@Injectable()
export class PostService {
  jsonPURL: string = "http://jsonplaceholder.typicode.com/posts";

  constructor(private _http: Http) { }

  getAllPosts(){
   return this._http.get(this.jsonPURL);
  }

  createPost(postObj){
   return this._http.post(this.jsonPURL, JSON.stringify(postObj))
     .catch((error: Response) => {
       if(error.status === 400 )
         return Observable.throw(new BadRequestError());
       return Observable.throw(new AppError(error));
     });
  }

  updatePost(postObj){
    return this._http.patch(this.jsonPURL +'/' + postObj.id , JSON.stringify({isRead: true}));
  }

  deletePost(id:number){
   return this._http.delete(this.jsonPURL +'/' + id )
     .catch((error: Response) => {
       if(error.status === 404)
           return Observable.throw(new NotFoundError());
         return Observable.throw(new AppError(error));

     });
  }

}
