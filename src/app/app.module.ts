import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from "./RKMRoutes";
import { RKMB2AIndexComponent } from './rkmb2a-index/rkmb2a-index.component';
import { RKMB2ANavbarComponent } from './ui/rkmb2a-navbar/rkmb2a-navbar.component';
import { CoursesComponent } from './exercises/courses/courses.component';
import { CoursesService } from './services/courses.service';
import { AuthorsService} from "./services/authors.service";
import { AuthorsComponent } from './exercises/authors/authors.component';
import { MyFavoriteComponent } from './exercises/my-favorite/my-favorite.component';
import { FavoritePipe } from './pipes/favorite.pipe';
import { LikesComponent } from './exercises/likes/likes.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    RKMB2AIndexComponent,
    RKMB2ANavbarComponent,
    CoursesComponent,
    AuthorsComponent,
    MyFavoriteComponent,
    FavoritePipe,
    LikesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [RKMB2AIndexComponent]
})
export class AppModule { }
