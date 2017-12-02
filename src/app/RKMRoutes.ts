
import {Routes} from "@angular/router";

import {LikesComponent} from "./exercises/likes/likes.component";
import {AuthorsComponent} from "./exercises/authors/authors.component";
import {CoursesComponent} from "./exercises/courses/courses.component";
import {RKMB2AIndexComponent} from "./rkmb2a-index/rkmb2a-index.component";


export const rkmngRoutes: Routes = [
  { path: 'home', component: RKMB2AIndexComponent },
  { path: 'section-4', component: LikesComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}

];


