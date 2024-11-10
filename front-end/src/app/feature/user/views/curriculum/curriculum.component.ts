import { Component ,Input, OnChanges, OnInit} from '@angular/core';
import { CouresViewModels } from '../../viewModels/couresViewModels';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnChanges{
@Input("id1")id1:any;   
@Input("id2")id2:any;  
couresViewModels: CouresViewModels ;
constructor(cVM:CouresViewModels){
this.couresViewModels=cVM;

}
ngOnChanges(): void {  
  this.couresViewModels.getListModule(<number>this.id1,<number>this.id2);
}

}
