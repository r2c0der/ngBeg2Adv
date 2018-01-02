import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {DataService} from "../http-exercises/common/data.service";


@Injectable()
export class PostService extends DataService {


  constructor( _http: Http) {
    let url: string = "http://jsonplaceholder.typicode.com/posts";
    super(url, _http);

  }



}
