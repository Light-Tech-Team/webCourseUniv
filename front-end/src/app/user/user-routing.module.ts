import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/views/layout/layout.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
  {path:'', loadChildren:()=>import('./feature/views/home/home.module').then(m=>m.HomeModule)},
  {path:'courses', loadChildren:()=>import('./feature/views/courses/courses.module').then(m=>m.CoursesModule)},
  {path:'contact-us', loadChildren:()=>import('./feature/views/contact-us/contact-us.module').then(m=>m.ContactUsModule)},
]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
