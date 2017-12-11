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
import { Likes2Component } from './exercises/likes2/likes2.component';
import { FundamentalsComponent } from './exercises/fundamentals/fundamentals.component';
import { ReusableComponentsComponent } from './exercises/reusable-components/reusable-components.component';
import { PipesDirectivesComponent } from './exercises/pipes-directives/pipes-directives.component';

import { ZippyDirective } from './directives/zippy/zippy.directive';
import { ZippyComponent } from './exercises/zippy/zippy.component';





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
    RkMTitleCasePipe,
    Likes2Component,
    FundamentalsComponent,
    ReusableComponentsComponent,
    PipesDirectivesComponent,
    ZippyDirective,
    ZippyComponent,

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
