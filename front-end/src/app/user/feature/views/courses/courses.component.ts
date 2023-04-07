import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import{Add } from '../../../shraed/add';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
artest=[ "Dropdown item","Other dropdown item","Active dropdown item"," Other dropdown item"]
toggleOff(event:any)
{
new Add().toggleOff(event)
}
toggleOn(event:any)
{
new Add().toggleOn(event)
}
}
