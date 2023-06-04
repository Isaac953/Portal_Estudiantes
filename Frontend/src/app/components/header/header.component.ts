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

  profileMenu: any[] = [
    {
      title: 'Cuenta',
      routerLink: '/user',
    },
    {
      title: 'Cerrar Sesion',
      routerLink: '/login',
    },
  ];
}
