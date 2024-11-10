import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesCourseComponent } from './modules-course.component';

const routes: Routes = [
  {path:'',component:ModulesCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesCourseRoutingModule { }
