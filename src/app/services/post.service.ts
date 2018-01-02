import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {DataService} from "../http-exercises/common/data.service";


@Injectable()
export class PostService extends DataService {
  // jsonPURL: string = "http://jsonplaceholder.typicode.com/posts";

  constructor( _http: Http) {
    super(_http);}



}
