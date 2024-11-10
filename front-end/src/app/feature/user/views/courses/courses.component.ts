import { Component} from '@angular/core';
import { CouresViewModels } from '../../viewModels/couresViewModels';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent { 
id1: number=0;  
id2: number=0; 
couresViewModels:CouresViewModels;
t:string="INF"
i:Array<string>=["premiere","douzieme","troisieme"]
constructor(c: CouresViewModels,){ 
this.couresViewModels=c;
} 
getIdsp(event:any){
this.id1=event
}
getIdy(event:any){
this.id2=event
  }

}
