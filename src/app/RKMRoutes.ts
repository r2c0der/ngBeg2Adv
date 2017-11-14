import { ModuleWithProviders } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LikeComponent} from "../../../exercise-like/like.component";
import {AuthorsComponent} from "./exercises/authors/authors.component";
import {CoursesComponent} from "./exercises/courses/courses.component";
import {RKMB2AIndexComponent} from "./rkmb2a-index/rkmb2a-index.component";


export const rkmngRoutes: Routes = [
  { path: 'post-likes', component: LikeComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'home', component: RKMB2AIndexComponent },
  { path: '*', redirectTo: 'home', pathMatch: 'full' }

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(rkmngRoutes, { enableTracing: true})
