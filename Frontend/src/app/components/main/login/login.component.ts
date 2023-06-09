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

  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private service: LoginService) { }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.loginData = this.profileForm.value;
    console.log(this.loginData);

    this.service.sendData()
    .subscribe(response => {
      this.loginData = response;
      console.log(this.loginData);
    });
  }
  ngOnInit() {

  }
}
