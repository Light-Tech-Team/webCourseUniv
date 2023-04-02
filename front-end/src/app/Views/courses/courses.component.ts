import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  artest=[ "Dropdown item","Other dropdown item","Active dropdown item"," Other dropdown item"]
  test:string="";
  toggleOff(event:any){
if(event.currentTarget !=null)
{this.test=event.currentTarget .closest(".dropdown") .className;
while(this.test.includes("is-active"))
this.test=this.test.replace("is-active","")
console.log(this.test)
event.currentTarget.closest(".dropdown").className=this.test
  }
}
toggleOn(event:any){
  if(event.currentTarget !=null)
  {this.test=event.currentTarget .closest(".dropdown") .className;
  this.test+=" is-active";
  console.log(this.test)
  event.currentTarget.closest(".dropdown").className=this.test 
}}
}
