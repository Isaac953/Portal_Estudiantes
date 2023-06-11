import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { GetDataService } from 'src/app/services/get-data.service';
import { LoadLoginService } from 'src/app/services/load-login.service';

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
  idUser = this.dataLoginJ.id_student;
  //Asignar el id de usuario a la ruta
  routerL = '/profile/' + this.idUser;
  responseApi: any;
  nameUser: any;

  constructor(
    private loadLogin: LoadLoginService,
    private lodadUser: GetDataService,
    private router: Router
  ) {}

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

    this.loadLogin.messageLogin$.subscribe((mesage) => {
      this.messageLogin = mesage;
      this.routerLogo = '/home';
      // console.log(this.messageLogin);
    });

    // this.loadLogin.idUser$.subscribe((id) => {
    //   this.idUser = id;
    // });
if(this.idUser != null){
  this.lodadUser.getProfile().subscribe((response) => {
    this.responseApi = response;
    this.nameUser = this.responseApi.usuario.nombre;
    console.log(this.nameUser);
    this.routerLogo = '/home';
  });
}else{

}

  }
}
