import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {DataService} from "../http-exercises/common/data.service";

@Injectable()
export class GithubService extends DataService {

  constructor( _http: Http) {
    let url: string = "https://api.github.com/users/r2c0der/followers";
    super(url, _http);
  }

}
