import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleListComponent } from './module-list.component';

const routes: Routes = [
  {path:"",component:ModuleListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleListRoutingModule { }
