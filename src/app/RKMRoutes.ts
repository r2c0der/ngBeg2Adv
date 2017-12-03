
import {Routes} from "@angular/router";

import {LikesComponent} from "./exercises/likes/likes.component";
import {AuthorsComponent} from "./exercises/authors/authors.component";
import {CoursesComponent} from "./exercises/courses/courses.component";
import {HomeComponent} from "./ui/home/home.component";
import {TitleCasingComponent} from "./exercises/title-casing/title-casing.component";


export const rkmngRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'section-4', component: LikesComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'title', component: TitleCasingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}

];


