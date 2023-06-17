import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { GetDataService } from 'src/app/services/get-data.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  imgProfile = './assets/user.png';
  profile = 'Perfil';
  altname = 'User';
  faChalkboard = faChalkboard;
  name = 'ElGradoSV';
  routerLogo = '/login';
  //Recuperar datos en localstorage de la sesion Login
  loginData = localStorage.getItem('session');
  dataLoginJ = JSON.parse(this.loginData || '{}');
  roleUser = this.dataLoginJ.rol;
  idStudent = this.dataLoginJ.id_student;
  idTeacher = this.dataLoginJ.id_teacher;
  messageLogin = this.dataLoginJ.message;
  routerL: any;
  responseApi: any;
  nameUser: any;

  constructor(
    private lodadUser: GetDataService,
    private login: LoginService,
    private router: Router
  ) { }

  logOut = () => {
    localStorage.clear();
    this.messageLogin = '';
    this.nameUser = '';
    this.responseApi = '';
    this.router.navigate(['/login']);

    setTimeout(() => {
      location.reload();
    }, 0);
  };

  loginDataF = () => {
    /*Show name User Student in Header*/
    if (this.roleUser == 'Estudiante') {
      this.routerL = '/profile/' + this.idStudent;
      this.lodadUser.getProfile(this.idStudent).subscribe((response) => {
        this.responseApi = response;
        console.log(this.responseApi);
        this.nameUser = this.responseApi.usuario.nombre;
        // console.log(this.nameUser);
        this.routerLogo = '/home';
      });
      /*Show name User Teacher in Header*/
    } else if (this.roleUser == 'Profesor') {
      this.idTeacher = this.dataLoginJ.id_teacher;
      this.routerL = '/profile/' + this.idTeacher;
      this.lodadUser.getProfileTeacher(this.idTeacher).subscribe((response) => {
        this.responseApi = response;
        this.nameUser = this.responseApi.usuario.nombre;
        this.routerLogo = '/home';
      });
    }
  }

  ngOnInit() {

    this.login.loginData$.subscribe((data) => {
      this.dataLoginJ = data;
      this.roleUser = this.dataLoginJ.rol;
      this.idStudent = this.dataLoginJ.id_student;
      this.idTeacher = this.dataLoginJ.id_teacher;
      this.messageLogin = this.dataLoginJ.message;
      this.loginDataF();
    });

    this.loginDataF();
  }
}
