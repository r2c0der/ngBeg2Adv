import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RKMB2AIndexComponent } from './rkmb2a-index/rkmb2a-index.component';
import { RKMB2ANavbarComponent } from './ui/rkmb2a-navbar/rkmb2a-navbar.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    RKMB2AIndexComponent,
    RKMB2ANavbarComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RKMB2AIndexComponent]
})
export class AppModule { }
