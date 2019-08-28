import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(private angularFire: AngularFireAuth,private router: Router) {
    this.angularFire.authState.subscribe(user=>{
      this.user = user;
    })
  }

  login(email:string, password: string){
    this.angularFire.auth
    .signInWithEmailAndPassword(email, password)
    .then(user=>{
      this.router.navigate(['/todoTask'])
    })
  }
  signup(email:string, password: string){
    this.angularFire.auth.createUserWithEmailAndPassword(email, password).then(value=>{
      console.log(value);
    })
  }
  logout(){
    this.angularFire.auth.signOut();
    console.log('Wylogowano')

  }
}
