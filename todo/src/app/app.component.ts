import { AuthService } from './auth/auth.service';


import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(public authservice: AuthService, private router: Router){

}
logout(){
  this.authservice.logout();
  this.router.navigate(['/login']);
}
}
