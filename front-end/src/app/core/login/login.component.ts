import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
lien: String="";
constructor(private router: Router){
  
  }
etudient(){
   
  this.lien='/1'

  }
enseignant(){
    this.lien='/staff/add-courses';
  }
admin(){
  this.lien='/admin'
}
navigate(){
  this.router.navigate([this.lien])

}

}
