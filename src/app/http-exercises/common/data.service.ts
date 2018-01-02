import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {BadInputError} from "./bad-input-error";
import {NotFoundError} from "./not-found-error";
import {AppError} from "./app.error";


@Injectable()
export class DataService {


  constructor(private jsonPURL, private _http: Http) { }

  getAll(){
    return this._http.get(this.jsonPURL)
      .catch(this.handleError);
  }

  create(resource){
    return this._http.post(this.jsonPURL, JSON.stringify(resource))
      .catch(this.handleError);
  }

  update(resource){
    return this._http.patch(this.jsonPURL +'/' + resource.id , JSON.stringify({isRead: true}))
      .catch(this.handleError);
  }

  delete(id:number){
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
