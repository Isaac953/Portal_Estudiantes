import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { LoadLoginService } from 'src/app/services/load-login.service';
import { GetDataService } from 'src/app/services/get-data.service';
import { Router } from '@angular/router';
import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons';

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

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private service: LoginService, private loadLogin: LoadLoginService, private router: Router) { }

  onSubmit() {
    console.warn(this.loginForm.value);
    this.service.sendData(this.loginForm.value).subscribe((response)=>{
      // console.warn(response);
      response.rol = 'Estudiante';
      this.routeC = '/home';
      localStorage.setItem('session', JSON.stringify(response));
      this.dataLogin = localStorage.getItem('session');
      this.dataLoginJ = JSON.parse(this.dataLogin);
      console.log(this.dataLoginJ.message);
      console.log(this.dataLoginJ.id_student);
      console.log(this.dataLoginJ.rol);
      this.loadLogin.messageLogin$.emit(this.dataLoginJ.message);
      this.loadLogin.idUser$.emit(this.dataLoginJ.id_student);
      this.router.navigate(['/home']);

      setTimeout(() => {
        location.reload();
    }, -100);
    })
  }
  ngOnInit() {
  }
}
