import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData: any;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  dataLogin = {
    "username":"isaac95",
    "password":"123"
    }

  constructor(private service: LoginService) { }

  onSubmit() {
    console.warn(this.loginForm.value);
    // console.warn(this.loginForm.value);
    // this.loginData = this.loginForm.value;
    this.service.sendData(this.loginForm.value).subscribe((response)=>{
      console.warn(response);
    })
  }
  ngOnInit() {

  }
}
