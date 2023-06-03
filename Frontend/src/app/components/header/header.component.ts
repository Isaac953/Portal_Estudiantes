import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  imgProfile = './assets/user.png';
  profile = 'Perfil';
  altname = 'User';
}
