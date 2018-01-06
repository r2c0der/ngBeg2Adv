import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import {BadInputError} from "./bad-input-error";
import {NotFoundError} from "./not-found-error";
import {AppError} from "./app.error";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {


  constructor(private url:string, private _http: Http) { }

  getAll(){
    return this._http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  create(resource){
    return this._http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource){
    return this._http.patch(this.url +'/' + resource.id , JSON.stringify({isRead: true}))
      .map(response => response.json())
      .catch(this.handleError);
  }

  delete(id:number){
    return this._http.delete(this.url +'/' + id )
      .map(response => response.json())
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
