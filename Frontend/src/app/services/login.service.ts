import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public urlLogin = 'http://localhost:8001/users/login/student/';
  public urlLogin2 = 'http://localhost:8001/users/login/teacher/';

  constructor(private httpClient: HttpClient) { }

  // Servicio para validar datos de login en el servidor
  sendData(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.urlLogin, data, {headers:headers});
  }

  // Servicio para validar datos de login en el servidor
  sendDataTeacher(data: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.urlLogin2, data, {headers:headers});
  }
}
