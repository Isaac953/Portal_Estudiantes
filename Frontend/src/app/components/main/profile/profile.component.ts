import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  idUser: any;
  responseApi: any;
  dataUser: any;

    //Recuperar datos en localstorage de la sesion Login
    loginData = localStorage.getItem('session');
    dataLoginJ = JSON.parse(this.loginData || '{}');
    messageLogin = this.dataLoginJ.message;
    roleUser = this.dataLoginJ.rol;
    //Asignar el id de usuario a la ruta

  constructor(private _route:ActivatedRoute, private lodadUser: GetDataService) {}

    ngOnInit() {

      this.dataUser = [];

      this.lodadUser.getProfile()
      .subscribe(response => {
        this.responseApi = response;
        this.dataUser.push(this.responseApi.usuario);
        console.log(this.dataUser);
        // this.nameUser = this.responseApi.usuario.nombre;
        // console.log(this.nameUser);
      });
    }
}
