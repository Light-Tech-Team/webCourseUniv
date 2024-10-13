import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStaffRoutingModule } from './add-staff-routing.module';
import { AddStaffComponent } from './add-staff.component';


@NgModule({
  declarations: [
    AddStaffComponent],
  imports: [
    CommonModule,
    AddStaffRoutingModule
  ]
})
export class AddStaffModule { }
