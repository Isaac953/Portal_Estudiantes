import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { GetDataService } from 'src/app/services/get-data.service';

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
  messageLogin = this.dataLoginJ.message;
  idUser: any;
  roleUser = this.dataLoginJ.rol;
  routerL: any;
  responseApi: any;
  nameUser: any;

  constructor(
    private lodadUser: GetDataService,
    private router: Router
  ) { }

  logOut = () => {
    localStorage.clear();
    this.messageLogin = null;
    this.nameUser = '';
    this.responseApi = '';
    this.router.navigate(['/login']);

    setTimeout(() => {
      location.reload();
    }, 0);
  };

  ngOnInit() {

    /*Show name User Student in Header*/
    if (this.roleUser == 'Estudiante') {
      this.idUser = this.dataLoginJ.id_student;
      this.routerL = '/profile/' + this.idUser;
      this.lodadUser.getProfile().subscribe((response) => {
        this.responseApi = response;
        this.nameUser = this.responseApi.usuario.nombre;
        // console.log(this.nameUser);
        this.routerLogo = '/home';
      });
    /*Show name User Teacher in Header*/
    } else if (this.roleUser == 'Profesor') {
      this.idUser = this.dataLoginJ.id_teacher;
      this.routerL = '/profile/' + this.idUser;
      this.lodadUser.getProfileTeacher().subscribe((response) => {
        this.responseApi = response;
        this.nameUser = this.responseApi.usuario.nombre;
        // console.log(this.nameUser);
        this.routerLogo = '/home';
      });
    }
  }
}
