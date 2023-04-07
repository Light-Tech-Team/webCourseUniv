import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { ModulesCourseComponent } from '../modules-course/modules-course.component';
const routes: Routes = [
  {path:'',component:CoursesComponent},
  {path:'modules-course',component:ModulesCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
