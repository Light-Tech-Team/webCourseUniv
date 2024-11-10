import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { SharedModule } from "../../../../shared/shared.module";
import { CurriculumComponent } from '../curriculum/curriculum.component';


@NgModule({
    declarations: [
        CoursesComponent,
        CurriculumComponent
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        RouterModule,
        SharedModule
    ]
})
export class CoursesModule { }
