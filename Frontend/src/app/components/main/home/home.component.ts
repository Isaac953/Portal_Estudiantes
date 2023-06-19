import { Component, OnInit } from '@angular/core';
import { faCalculator, faMicroscope, faEarthAmericas, faBook, faFileLines, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';
import { LoginService } from 'src/app/services/login.service';

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
  idStudent = this.dataLoginJ.id_student;
  idTeacher = this.dataLoginJ.id_teacher;

  sendAsignature = (id: any) => {
    this.idAsignatature = id;
    window.scrollTo(0, 0);
  };

  showSubjects = () => {
    this.asignatureItems = [];
    this.teacherData = [];
    this.teacherName = [];
    /*Show Subjects Student*/
    if (this.roleUser == 'Estudiante') {
      this.loadAsignature.getEstudentSubject(this.idStudent)
        .subscribe(response => {
          this.responseApi = response;
          // console.log(this.responseApi);
        });

      /*Show Subjects Teacher*/
    } else if (this.roleUser == 'Profesor') {
      this.loadAsignature.getTeacherSubject(this.idTeacher)
        .subscribe(response => {
          this.responseApi = response;
        });
    }
  }

  constructor(private _route: ActivatedRoute, private loadAsignature: GetDataService, private login: LoginService, private router: Router
  ) { }

  ngOnInit() {
    this.login.loginData$.subscribe((data) => {
      this.dataLoginJ = data;
      this.idStudent = this.dataLoginJ.id_student;
      this.idTeacher = this.dataLoginJ.id_teacher;
      this.roleUser = this.dataLoginJ.rol;
      this.showSubjects();
    });

    this.showSubjects();

  }
}
