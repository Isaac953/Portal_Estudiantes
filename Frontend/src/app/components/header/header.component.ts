import { Component } from '@angular/core';
import { faChalkboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imgProfile = './assets/user.png';
  profile = 'Perfil';
  altname = 'User';
  faChalkboard = faChalkboard;
  name = 'ElGradoSV';
  id=2;
  routerL = '/profile/' + this.id;

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
}
