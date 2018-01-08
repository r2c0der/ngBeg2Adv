import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'rkm-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap
      .subscribe(params =>{
     let id =  +params.get('id');
     console.log('id');
      })
  }

}
