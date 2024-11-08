import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent {
  line:number=3;
  t=[ [ 'Jorge', 'John' ], [ 'Omar', 'Selma' ] ]

}
