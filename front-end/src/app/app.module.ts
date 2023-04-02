import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { CoursesComponent } from './Views/courses/courses.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';
import { NavBarComponent } from './Views/nav-bar/nav-bar.component';
import { CurriculumComponent } from './Views/curriculum/curriculum.component';
import { ModulesCourseComponent } from './Views/modules-course/modules-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    ContactUsComponent,
    NavBarComponent,
    CurriculumComponent,
    ModulesCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
