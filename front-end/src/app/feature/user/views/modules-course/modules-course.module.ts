import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesCourseRoutingModule } from './modules-course-routing.module';
import { ModulesCourseComponent } from './modules-course.component';
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations: [
        ModulesCourseComponent
    ],
    imports: [
        CommonModule,
        ModulesCourseRoutingModule,
        SharedModule
    ]
})
export class ModulesCourseModule { }
