import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
const routes: Routes = [
  {path:'',component:CoursesComponent},
  {path:'modules-course/:name',loadChildren:()=>import('../modules-course/modules-course.module').then(m=>m.ModulesCourseModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
