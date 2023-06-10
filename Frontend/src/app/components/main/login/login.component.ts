import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataLogin: any;
  dataLoginJ: any;
  messageLogin: any;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private service: LoginService) { }

  onSubmit() {
    console.warn(this.loginForm.value);
    this.service.sendData(this.loginForm.value).subscribe((response)=>{
      // console.warn(response);
      localStorage.setItem('session', JSON.stringify(response));
      this.dataLogin = localStorage.getItem('session');
      this.dataLoginJ = JSON.parse(this.dataLogin);

      console.log(this.dataLoginJ.message);
      console.log(this.dataLoginJ.id_student);

    })
  }
  ngOnInit() {

  }
}
