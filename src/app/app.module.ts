import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RKMB2AIndexComponent } from './rkmb2a-index/rkmb2a-index.component';
import { RKMB2ANavbarComponent } from './ui/rkmb2a-navbar/rkmb2a-navbar.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './services/courses.service';
import { AuthorsService} from "./services/authors.service";
import { AuthorsComponent } from './authors/authors.component';
import { MyFavoriteComponent } from './my-favorite/my-favorite.component';
import { FavoritePipe } from './pipes/favorite.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RKMB2AIndexComponent,
    RKMB2ANavbarComponent,
    CoursesComponent,
    AuthorsComponent,
    MyFavoriteComponent,
    FavoritePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [RKMB2AIndexComponent]
})
export class AppModule { }
