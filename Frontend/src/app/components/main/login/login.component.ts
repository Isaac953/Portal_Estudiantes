import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataLogin: any;
  dataLoginJ: any;
  messageLogin: any;
  responseApi: any;
  userProfile: any;
  routeC = '/login';
  role: any;
  checked = true;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rol: new FormControl('e', [Validators.required]),
  });

  constructor(private service: LoginService, private router: Router) { }

  onSubmit() {
    //Haciendo login de estudiante
    if (this.loginForm.controls.rol.value == 'e') {
      this.role = 'Estudiante';
      this.service.sendData(this.loginForm.value).subscribe((response) => {
        response.rol = this.role;
        localStorage.setItem('session', JSON.stringify(response));
        this.dataLogin = localStorage.getItem('session');
        this.dataLoginJ = JSON.parse(this.dataLogin);
        setTimeout(() => {
          this.service.loginData$.emit(this.dataLoginJ);
          this.router.navigate(['/home']);
        }, 800);
      })

    //Haciendo login de profesor
    } else if (this.loginForm.controls.rol.value == 'p') {
      this.role = 'Profesor';
      this.service.sendDataTeacher(this.loginForm.value).subscribe((response) => {
        response.rol = this.role;
        localStorage.setItem('session', JSON.stringify(response));
        this.dataLogin = localStorage.getItem('session');
        this.dataLoginJ = JSON.parse(this.dataLogin);
        setTimeout(() => {
          this.service.loginData$.emit(this.dataLoginJ);
          this.router.navigate(['/home']);
        }, 800);
      })
    }
  }
  ngOnInit() {
  }
}
