import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddModuleRoutingModule } from './add-module-routing.module';
import { AddModuleComponent } from './add-module.component';


@NgModule({
  declarations: [AddModuleComponent],
  imports: [
    CommonModule,
    AddModuleRoutingModule
  ]
})
export class AddModuleModule { }
