import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // public urlServer = 'http://localhost:8001'; //Servidor Django Docker
  public urlServer = 'https://student-portal-fomas.herokuapp.com'; //Servidor Heroku

  //Urls Login Pruebas
  public urlLoginStudent =  this.urlServer + '/users/login/student/';
  public urlLoginTeacher = this.urlServer + '/users/login/teacher/';

  urlStudentLogin: any;
  // messageLogin$ = new EventEmitter<string>();
  // idUser$ = new EventEmitter<number>();
  // role$ = new EventEmitter<string>();
  loginData$ = new EventEmitter<string[]>();

  constructor(private httpClient: HttpClient) { }

  // Servicio para validar datos de login de estudiante en el servidor
  sendData(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.urlLoginStudent, data, {headers:headers});
  }

  // Servicio para validar datos de login de profesor en el servidor
  sendDataTeacher(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.urlLoginTeacher, data, {headers:headers});
  }
}
