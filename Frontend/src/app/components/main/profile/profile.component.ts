import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
import { LoginService } from 'src/app/services/login.service';

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
  idStudent = this.dataLoginJ.id_student;
  idTeacher = this.dataLoginJ.id_teacher;
  //Asignar el id de usuario a la ruta

  showProfile = () => {
    this.dataUser = [];
    this.dataCourse = [];

    /*Show Profile User Student*/
    if (this.roleUser == 'Estudiante') {
      this.lodadUser.getProfile(this.idStudent).subscribe((response) => {
        this.responseApi = response;
        this.dataUser.push(this.responseApi.usuario);
      });
      this.lodadUser.getCourseStudent(this.idStudent).subscribe((response) => {
        this.responseApiCourse = response;
        this.dataCourse.push(this.responseApiCourse.grado + '° Grado, ');
        this.dataCourse.push('Sección ' + this.responseApiCourse.seccion + ', ');
        this.dataCourse.push(this.responseApiCourse.anio);
      });
      /*Show Profile User Teacher*/
    } else if (this.roleUser == 'Profesor') {
      this.lodadUser.getProfileTeacher(this.idTeacher).subscribe((response) => {
        this.responseApi = response;
        this.dataUser.push(this.responseApi.usuario);
      });
    }
  }

  constructor(private _route: ActivatedRoute, private lodadUser: GetDataService, private login: LoginService) { }

  ngOnInit() {
    this.login.loginData$.subscribe((data) => {
      this.dataLoginJ = data;
      this.idStudent = this.dataLoginJ.id_student;
      this.idTeacher = this.dataLoginJ.id_teacher;
      this.roleUser = this.dataLoginJ.rol;
      this.showProfile();
    });

    this.showProfile();
  }
}
