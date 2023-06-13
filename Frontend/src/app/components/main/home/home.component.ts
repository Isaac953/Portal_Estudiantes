import { Component, OnInit } from '@angular/core';
import { faCalculator, faMicroscope, faEarthAmericas, faBook, faFileLines, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameAsignature: any;
  idAsignatature: any;
  btnName = 'Contenido';
  responseApi: any;
  responseApi2: any;
  asignatureItems: any;
  faFileLines = faFileLines;
  faPenToSquare = faPenToSquare;
  teacherName: any;
  teacherData: any;
  obj: any;
  teacherId: any;

  //Recuperar datos en localstorage de la sesion Login
  loginData = localStorage.getItem('session');
  dataLoginJ = JSON.parse(this.loginData || '{}');
  roleUser = this.dataLoginJ.rol;
  idUser: any;
    //Asignar el id de usuario a la ruta

  // asignatureItems: any[] = [
  //   {
  //     id: 0,
  //     title: 'Matemáticas',
  //     icon: faCalculator,
  //     button: this.btnName,
  //   },
  //   {
  //     id: 1,
  //     title: 'Ciencias',
  //     icon: faMicroscope,
  //     button: this.btnName,
  //   },
  //   {
  //     id: 2,
  //     title: 'Sociales',
  //     icon: faEarthAmericas,
  //     button: this.btnName,
  //   },
  //   {
  //     id: 3,
  //     title: 'Lenguaje',
  //     icon: faBook,
  //     button: this.btnName,
  //   },
  // ];

  sendAsignature = (id: any) => {
    this.idAsignatature = id;
    window.scrollTo(0, 0);
    // window.scrollTo(0, 0);
    // console.log(this.nameAsignature);
    // console.log(this.idAsignatature);
  };

  showTeacher = (id: any) => {
    this.teacherId = id;
    this.loadAsignature.getTeacherName(this.teacherId)
        .subscribe(response => {
          this.responseApi = response;

          console.log(this.responseApi);

        });
  }

  constructor(private _route: ActivatedRoute, private loadAsignature: GetDataService
  ) { }

  ngOnInit() {
    this.asignatureItems = [];
    this.teacherData = [];    /*Show Profile User Student*/
    this.teacherName = [];
    if (this.roleUser == 'Estudiante') {
      this.loadAsignature.getEstudentSubject()
        .subscribe(response => {
          this.responseApi = response;
          // this.showTeacher(this.responseApi.profesor);
        });

      /*Show Profile User Teacher*/
    } else if (this.roleUser == 'Profesor') {
      this.loadAsignature.getTeacherSubject()
        .subscribe(response => {
          this.responseApi = response;
          this.asignatureItems = this.responseApi;
          console.log(this.asignatureItems);
        });
    }
  }
}
