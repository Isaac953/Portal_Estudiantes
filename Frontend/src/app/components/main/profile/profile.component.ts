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


  constructor(private _route:ActivatedRoute, private lodadUser: GetDataService) {}

    ngOnInit() {
      this.idUser = this._route.snapshot.paramMap.get('id');

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
