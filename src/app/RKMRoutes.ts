
import {Routes} from "@angular/router";

import {HomeComponent} from "./ui/home/home.component";

import {FundamentalsComponent} from "./exercises/fundamentals/fundamentals.component";
import {ReusableComponentsComponent} from "./exercises/reusable-components/reusable-components.component";
import {PipesDirectivesComponent} from "./exercises/pipes-directives/pipes-directives.component";
import {FormsComponent} from "./exercises/forms/forms.component";
import {TemplateDrivenComponent} from "./exercises/forms/template-driven/template-driven.component";
import {ReactiveComponent} from "./exercises/forms/reactive/reactive.component";
import {HTTPExercisesComponent} from "./http-exercises/httpexercises/httpexercises.component";


export const rkmngRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'components', component: ReusableComponentsComponent },
  { path: 'basics', component: FundamentalsComponent },
  { path: 'pipdir', component: PipesDirectivesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'reactive', component: ReactiveComponent },
  { path: 'http', component: HTTPExercisesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}

];


