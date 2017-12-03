import { Component, OnInit } from '@angular/core';
import { AuthorsService} from "../../services/authors.service";

@Component({
  selector: 'rkm-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title: string = 'Favorite Authors';
  authors;

  constructor(private _authorService: AuthorsService) { }

  ngOnInit() {
    this.authors = this._authorService.getAuthors();
  }

}
