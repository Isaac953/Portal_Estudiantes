import { Component, OnInit } from '@angular/core';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { LoadLoginService } from 'src/app/services/load-login.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
  idUser= this.dataLoginJ.id_student;
  //Asignar el id de usuario a la ruta
  routerL = '/profile/' + this.idUser;

  profileMenu: any[] = [
    {
      title: 'Cuenta',
      routerLink: this.routerL,
    },
    {
      title: 'Cerrar Sesion',
      routerLink: '/login',
    },
  ];

  constructor(private loadLogin: LoadLoginService) {}

  ngOnInit() {
    this.loadLogin.messageLogin$.subscribe((mesage) => {
      this.messageLogin = mesage;
      this.routerLogo = '/home';
      // console.log(this.messageLogin);
    });

    if(this.messageLogin != null){
      this.routerLogo = '/home'
    }else{
      this.routerLogo = '/login'
    }
  }
}
