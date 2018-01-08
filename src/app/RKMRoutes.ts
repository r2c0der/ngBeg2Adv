
import {Routes} from "@angular/router";

import {HomeComponent} from "./ui/home/home.component";

import {FundamentalsComponent} from "./exercises/fundamentals/fundamentals.component";
import {ReusableComponentsComponent} from "./exercises/reusable-components/reusable-components.component";
import {PipesDirectivesComponent} from "./exercises/pipes-directives/pipes-directives.component";
import {FormsComponent} from "./exercises/forms/forms.component";
import {TemplateDrivenComponent} from "./exercises/forms/template-driven/template-driven.component";
import {ReactiveComponent} from "./exercises/forms/reactive/reactive.component";
import {HTTPExercisesComponent} from "./http-exercises/httpexercises/httpexercises.component";
import {GithubFollowersComponent} from "./http-exercises/github-followers/github-followers.component";
import {GithubProfileComponent} from "./routes-exercises/github-profile/github-profile.component";
import {GithubHomeComponent} from "./routes-exercises/github-home/github-home.component";
import {GithubNotfoundComponent} from "./routes-exercises/github-notfound/github-notfound.component";


export const rkmngRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'components', component: ReusableComponentsComponent },
  { path: 'basics', component: FundamentalsComponent },
  { path: 'pipdir', component: PipesDirectivesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'http', component: HTTPExercisesComponent },
  { path: 'githome', component: GithubHomeComponent },
  { path: 'followers/:id', component: GithubProfileComponent },
  { path: 'followers', component: GithubFollowersComponent },
  { path: 'posts', component: HTTPExercisesComponent },
  { path: 'notfound', component: GithubNotfoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}

];


