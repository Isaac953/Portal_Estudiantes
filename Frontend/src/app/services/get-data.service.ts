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

  public urlServer = 'http://localhost:8001'; //Servidor Django Docker
  // public urlServer = 'https://student-portal-fomas.herokuapp.com'; //Servidor Heroku

  // Variables para URLs APIs
  urlProfileStudent: any;
  urlProfileTeacher: any;
  urlTeacherName: any;
  urlSubjectStudent: any;
  urlSubjectTeacher: any;
  urlCourseStudent: any;
  urlContentSub: any;
  urlCrudContent: any;
  urlInsertC: any;
  urlPutC: any;
  urlDeleteC: any;
  urlContentSubE: any;

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

  //API para obtener el nombre del curso actual del Estudiante
  getCourseStudent() {
    this.urlCourseStudent = this.urlServer + '/courses/students/' + this.idUser + '/courses/current/?format=json'
    return this.httpClient.get(this.urlCourseStudent);
  }

  //API para obtener el contenido de asignatura especifico
  getSubjectContent(id: any) {
    this.urlContentSub = this.urlServer + '/courses/students/courses/subjects/' + id + '/contents/?format=json'
    return this.httpClient.get(this.urlContentSub);
  }

  //API para obtener el contenido de asignatura especifico
  getActivityContent(id: any) {
    this.urlContentSubE = this.urlServer + '/courses/students/courses/subjects/contents/' + id + '/?format=json'
    return this.httpClient.get(this.urlContentSubE);
  }

  //API para obtener el crud de contenidos Profesor
  getCrudContent(id: any) {
    this.urlCrudContent = this.urlServer + '/courses/teachers/subjects/contents/' + id + '/?format=json'
    return this.httpClient.get(this.urlCrudContent);
  }

  //API para insertar contenidos Profesor
  insertContent(data: any, id: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.urlInsertC = this.urlServer + '/courses/teachers/subjects/' + id + '/contents/create/?format=json';
    return this.httpClient.post(this.urlInsertC, data, { headers: headers });
  }

  //API para actualizar contenidos Profesor
  updateContent(data: any, id: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.urlPutC = this.urlServer + '/courses/teachers/subjects/contents/' + id + '/?format=json';
    return this.httpClient.put(this.urlPutC, data, { headers: headers });
  }

  //API para eliminar contenidos Profesor
  deleteContent(data: any, id: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.urlDeleteC = this.urlServer + '/courses/teachers/subjects/contents/' + id + '/';
    return this.httpClient.delete(this.urlDeleteC, data);
  }
}
