import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { CoursesComponent } from './user/feature/views/courses/courses.component';
import { ContactUsComponent } from './Views/contact-us/contact-us.component';
import { NavBarComponent } from './user/core/views/nav-bar/nav-bar.component';
import { CurriculumComponent } from './user/feature/views/curriculum/curriculum.component';
import { ModulesCourseComponent } from './user/feature/views/modules-course/modules-course.component';

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
