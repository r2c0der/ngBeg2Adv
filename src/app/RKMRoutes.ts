
import {Routes} from "@angular/router";

import {HomeComponent} from "./ui/home/home.component";

import {FundamentalsComponent} from "./exercises/fundamentals/fundamentals.component";
import {ReusableComponentsComponent} from "./exercises/reusable-components/reusable-components.component";
import {PipesDirectivesComponent} from "./exercises/pipes-directives/pipes-directives.component";


export const rkmngRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'components', component: ReusableComponentsComponent },
  { path: 'basics', component: FundamentalsComponent },
  { path: 'pipdir', component: PipesDirectivesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}

];


