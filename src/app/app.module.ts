import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { RKMB2AIndexComponent } from './rkmb2a-index/rkmb2a-index.component';
import { RKMB2ANavbarComponent } from './ui/rkmb2a-navbar/rkmb2a-navbar.component';
import { CoursesComponent } from './exercises/courses/courses.component';
import { CoursesService } from './services/courses.service';
import { AuthorsService} from "./services/authors.service";
import { AuthorsComponent } from './exercises/authors/authors.component';
import { MyFavoriteComponent } from './exercises/my-favorite/my-favorite.component';
import { LikesComponent } from './exercises/likes/likes.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { rkmngRoutes} from "./RKMRoutes";
import { HomeComponent } from './ui/home/home.component';
import { TitleCasingComponent } from './exercises/title-casing/title-casing.component';
import { RkMTitleCasePipe } from './pipes/rkmtitlecase.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RKMB2AIndexComponent,
    RKMB2ANavbarComponent,
    CoursesComponent,
    AuthorsComponent,
    MyFavoriteComponent,
    LikesComponent,
    HomeComponent,
    TitleCasingComponent,
    RkMTitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rkmngRoutes, { enableTracing: false})
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [RKMB2AIndexComponent]
})
export class AppModule { }
