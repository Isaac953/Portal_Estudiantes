import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  userName$ = new EventEmitter<string>();

  //Recuperar datos en localstorage de la sesion Login
  loginData = localStorage.getItem('session');
  dataLoginJ = JSON.parse(this.loginData || '{}');
  rolUser = this.dataLoginJ.rol;

  constructor(private httpClient: HttpClient) { }

  idUser = this.dataLoginJ.id_student;
  idTeacher = this.dataLoginJ.id_teacher;

  // public urlServer = 'http://localhost:8001';
  public urlServer = 'https://student-portal-fomas.herokuapp.com'; //Servidor Heroku

  urlProfileStudent: any;
  urlProfileTeacher: any;
  urlTeacherName: any;
  urlSubjectStudent: any;
  urlSubjectTeacher: any;
  urlCourseStudent: any;


  urlt: any;
  urlc: any;
  urla: any;
  urlcrud: any;
  urlintc: any;
  urlupdc: any;

  //API para obtener información del perfil de estudiante
  getProfile() {
    this.urlProfileStudent = this.urlServer + '/users/profile/student/' + this.idUser + '/?format=json'
    return this.httpClient.get(this.urlProfileStudent);
  }

  //API para obtener información del perfil de profesor
  getProfileTeacher() {
    this.urlProfileTeacher = this.urlServer + '/users/profile/teacher/' + this.idTeacher + '/?format=json';
    return this.httpClient.get(this.urlProfileTeacher);
  }

  //API para obtener el nombre del profesor
  getTeacherName(id: any) {
    this.urlTeacherName = this.urlServer + '/users/profile/teacher/' + id + '/?format=json';
    return this.httpClient.get(this.urlTeacherName);
  }

  //API para obtener el nombre de las Asignaturas Estudiante
  getEstudentSubject() {
    this.urlSubjectStudent = this.urlServer + '/courses/students/courses/' + this.idUser + '/subjects/?format=json'
    return this.httpClient.get(this.urlSubjectStudent);
  }

  //API para obtener el nombre de las Asignaturas Profesor
  getTeacherSubject() {
    this.urlSubjectTeacher = this.urlServer + '/courses/teachers/' + this.idTeacher + '/subjects/?format=json'
    return this.httpClient.get(this.urlSubjectTeacher);
  }

  getCourseStudent() {
    this.urlCourseStudent = this.urlServer + '/courses/students/' + this.idUser + '/courses/current/?format=json'
    return this.httpClient.get(this.urlCourseStudent);
  }




















  getAsigContent(id: any) {
    this.urlc = 'http://localhost:8001/courses/students/courses/subjects/' + id + '/contents/?format=json'
    return this.httpClient.get(this.urlc);
  }

  getCrudContent(id: any) {
    this.urlcrud = 'http://localhost:8001/courses/teachers/subjects/contents/' + id + '/?format=json'
    return this.httpClient.get(this.urlcrud);
  }

  // Servicio para validar datos de login en el servidor
  insertContent(data: any, id: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.urlintc = 'http://localhost:8001/courses/teachers/subjects/' + id + '/contents/create/';
    return this.httpClient.post(this.urlintc, data, { headers: headers });
  }

  // Servicio para validar datos de login en el servidor
  updateContent(data: any, id: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.urlupdc = 'http://localhost:8001/courses/teachers/subjects/contents/' + id + '/';
    return this.httpClient.put(this.urlupdc, data, { headers: headers });
  }

  // Servicio para validar datos de login en el servidor
  deleteContent(data: any, id: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.urlupdc = 'http://localhost:8001/courses/teachers/subjects/contents/' + id + '/';
    return this.httpClient.delete(this.urlupdc, data);
  }

  // insertContent(id:any){
  //   this.urlintc = 'http://localhost:8001/courses/teachers/subjects/'+ id +'/contents/create/';
  //   return this.httpClient.get(this.urlintc);
  // }

  // getActivities(id:any){
  //   http://localhost:8001/courses/teachers/subjects/3/contents/
  //   this.urla = 'http://localhost:8001/courses/students/courses/subjects/contents/'+ id +'/?format=json'
  //   return this.httpClient.get(this.urla);
  // }

    // getTeacherSubject(id: any) {
  //   this.urlt = 'http://localhost:8001/users/profile/teacher/' + id + '/?format=json';
  //   return this.httpClient.get(this.urlt);
  // }
}
