import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  login(formData: NgForm){
    this.authService.login(formData.value.email, formData.value.password);

    }
    signup(formData: NgForm){
      this.authService.signup(formData.value.email, formData.value.password)
    }

}
