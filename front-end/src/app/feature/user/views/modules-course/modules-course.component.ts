import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modules-course',
  templateUrl: './modules-course.component.html',
  styleUrls: ['./modules-course.component.css']
})
export class ModulesCourseComponent {
 NM: string[] = ['Analyse1', 'Algebre1','Electricite','Economie','Mecanique','Bureatique','Communication','Anglais1','','','','','','','','']; 
 titel: string[] = ['Cours', 'TD', 'TP']; 
 data1:any
  = [
    [
      "<h1>John Doe</h1>",
      "<p>email</p><a>johndoe@example.com</a>",
      "<button id='btn' name='btn'>test</button>"
    ],
    [
      "<img  src='../../assets/LOGO WEBSITE.png' width='112' height='28'>",
      "janedoe@example.com",
       "987-654-3210"
    ]
  ]; 
data2:any
   = [
    [
      "<a>Cour1</a>",
      "Cour2",
      "Cour3",
      "Cour4",
      "Cour5",
    ],
    [
      "TD1",
      "TD2",
      "TD3",
      "TD4",
      "TD5",
      "TD6",
      "TD7",
    ]
    ,
    [
      "TP1",
      "TP2",
      "TP3",
      "TP4",
      "TP5",
      "TP6",
    ]
  ];



constructor(private route :ActivatedRoute){
//this.route.params.subscribe(data=>{console.log(data['name'])})

}
}
