import { formatDate } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import {FormBuilder,FormControl, FormGroup } from '@angular/forms';
import { CoursesServiceService } from 'src/app/services/http/courses-service/courses-service.service';
import { Course } from 'src/app/services/models/coursesModels';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent {
  
  courseForm: any
  data:FormData;
  constructor(formBuilder: FormBuilder, private Cs :CoursesServiceService){
 
  this.courseForm=formBuilder.group({
    nameCourse:[''],
    course:[]
  })
  this.data=new FormData();   
  }
  onSubmit(){
   
  // 
  let xhr = new XMLHttpRequest();
  xhr.open('POST','http://127.0.0.1:5000//course',true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  this.data.append('file',this.course.value)
  //  this.Cs.postCourse(this.data.get('file')).subscribe()

   console.log(this.data)
   xhr.send(this.data)
  }


  get course(){

    return this.courseForm.get('course')
  }
  get nameCourse(){

    return this.courseForm.get('nameCourse')
  }

}
