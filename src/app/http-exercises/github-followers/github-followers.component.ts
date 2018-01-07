import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../services/github.service";

@Component({
  selector: 'rkm-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[];

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this._githubService.getAll()
      .subscribe(
        followers =>
        {
          this.followers = followers,
            console.log(followers);
        },

        error => {
          alert('An unexpected error has occurred');
          console.log(error);
        }
      )
  }

}
