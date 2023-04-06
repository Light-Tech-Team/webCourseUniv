import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ HomeComponent}from 'src/app/Views/home/home.component'
import{CoursesComponent}from 'src/app/user/feature/views/courses/courses.component'
import{ContactUsComponent}from 'src/app/Views/contact-us/contact-us.component'
import { ModulesCourseComponent}from 'src/app/user/feature/views/modules-course/modules-course.component'
const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'courses',component:CoursesComponent},
{path:'modules-course',component:ModulesCourseComponent},
{path:'contact-us',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
