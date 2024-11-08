import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffListRoutingModule } from './staff-list-routing.module';
import { StaffListComponent } from './staff-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StaffListComponent
  ],
  imports: [
    CommonModule,
    StaffListRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class StaffListModule { }
