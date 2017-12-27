import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from "@angular/router";
import { HttpModule } from "@angular/http";

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
import { FormsComponent } from './exercises/forms/forms.component';
import { ContactFormComponent } from './exercises/contact-form/contact-form.component';
import { CourseFormComponent } from './exercises/course-form/course-form.component';
import { SignupFormComponent } from './exercises/signup-form/signup-form.component';
import { TemplateDrivenComponent } from './exercises/forms/template-driven/template-driven.component';
import { ReactiveComponent } from './exercises/forms/reactive/reactive.component';
import {NewCourseFormComponent} from './exercises/forms/newcourseform/newcourseform.component';
import { ChangePasswordComponent } from './exercises/changepassword/changepassword.component';
import { JSONPlaceholderPostsComponent } from './http-exercises/jsonplaceholder-posts/jsonplaceholder-posts.component';
import { HTTPExercisesComponent } from './http-exercises/httpexercises/httpexercises.component';
import { JSONPlaceholderUpdatedPostsComponent } from './http-exercises/jsonplaceholder-updated-posts/jsonplaceholder-updated-posts.component';
import {PostService} from "./services/post.service";






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
    FormsComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    JSONPlaceholderPostsComponent,
    HTTPExercisesComponent,
    JSONPlaceholderUpdatedPostsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rkmngRoutes, { enableTracing: false})
  ],
  providers: [
    CoursesService,
    AuthorsService,
    PostService
  ],
  bootstrap: [RKMB2AIndexComponent]
})
export class AppModule { }
