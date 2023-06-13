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
  responseApiCourse: any;
  dataUser: any;
  dataCourse: any;

    //Recuperar datos en localstorage de la sesion Login
    loginData = localStorage.getItem('session');
    dataLoginJ = JSON.parse(this.loginData || '{}');
    messageLogin = this.dataLoginJ.message;
    roleUser = this.dataLoginJ.rol;
    //Asignar el id de usuario a la ruta

  constructor(private _route:ActivatedRoute, private lodadUser: GetDataService) {}

    ngOnInit() {

      this.dataUser = [];
      this.dataCourse = [];

       /*Show Profile User Student*/
    if (this.roleUser == 'Estudiante') {
      this.idUser = this.dataLoginJ.id_student;
      this.lodadUser.getProfile().subscribe((response) => {
        this.responseApi = response;
        this.dataUser.push(this.responseApi.usuario);
        // console.log(this.dataUser);
      });
      this.lodadUser.getCourseStudent().subscribe((response) => {
        this.responseApiCourse = response;
        this.dataCourse.push(this.responseApiCourse.grado + '° Grado, ');
        this.dataCourse.push('Sección ' + this.responseApiCourse.seccion + ', ');
        this.dataCourse.push(this.responseApiCourse.anio);
        console.log(this.dataCourse);
      });
    /*Show Profile User Teacher*/
    } else if (this.roleUser == 'Profesor') {
      this.idUser = this.dataLoginJ.id_teacher;
      this.lodadUser.getProfileTeacher().subscribe((response) => {
        this.responseApi = response;
        this.dataUser.push(this.responseApi.usuario);
        // console.log(this.dataUser);
      });
    }
    }
}
