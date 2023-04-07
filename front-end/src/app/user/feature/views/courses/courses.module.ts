import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { RouterModule } from '@angular/router';
import { CurriculumComponent } from '../curriculum/curriculum.component';
import { CoursesComponent } from './courses.component';


@NgModule({
  declarations: [
    CoursesComponent,
    CurriculumComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    RouterModule
  ]
})
export class CoursesModule { }
