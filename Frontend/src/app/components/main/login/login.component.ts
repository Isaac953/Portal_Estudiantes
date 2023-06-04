import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginInputs: any[] = [
    {
      type: 'email',
      name: 'email',
      id: 'email',
      placeHolder: 'Correo',
    },
    {
      type: 'password',
      name: 'password',
      id: 'password',
      placeHolder: 'Contraseña',
    },
  ];
}
