import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailUser: any;
  passUser: any;

sendUser = (email: string, pass: any) => {
  this.emailUser = email;
  this.passUser = pass;
  alert(this.emailUser);
  alert(this.passUser);
};
}
