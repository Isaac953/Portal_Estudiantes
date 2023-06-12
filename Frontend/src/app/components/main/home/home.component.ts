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

  constructor(private _route: ActivatedRoute, private loadAsignature: GetDataService
  ) { }

  ngOnInit() {
    this.asignatureItems = [];
    this.teacherData = [];
    /*Show Profile User Student*/
    if (this.roleUser == 'Estudiante') {
      this.loadAsignature.getAsignatures()
        .subscribe(response => {
          this.responseApi = response;
          this.asignatureItems = this.responseApi;
          console.log(this.asignatureItems);


          //  for (let i = 0; i < this.responseApi.length; i++) {
          //   this.teacherName = [];

          //   this.loadAsignature.getTeacherSubject(this.responseApi[i].profesor).subscribe(response => {
          //         this.responseApi2 = response;
          //         this.teacherName.push(this.responseApi2.usuario.nombre);
          //         // console.log(this.teacherName[i]);
          //         setTimeout(() => {
          //           this.asignatureItems[i].maestro = this.teacherName[i];
          //         }, 300);

          //       });

          //     }

              console.log(this.asignatureItems);

        });



      /*Show Profile User Teacher*/
    } else if (this.roleUser == 'Profesor') {
      this.loadAsignature.getAsignaturesTeacher()
        .subscribe(response => {
          this.responseApi = response;
          this.asignatureItems = this.responseApi;
          console.log(this.asignatureItems);
        });
    }
  }
}
