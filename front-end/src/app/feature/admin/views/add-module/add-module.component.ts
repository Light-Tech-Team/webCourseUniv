import { Component } from '@angular/core';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent {
  spevis:boolean=false;
  Ajouter(){
this.spevis=true

  }
  Enregister(){
    this.spevis=false

  }
}
