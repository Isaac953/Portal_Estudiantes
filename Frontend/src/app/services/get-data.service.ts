import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  userName$ = new EventEmitter<string>();

  //Recuperar datos en localstorage de la sesion Login
  loginData = localStorage.getItem('session');
  dataLoginJ = JSON.parse(this.loginData || '{}');
  idUser= this.dataLoginJ.id_student;

  private url = 'http://localhost:8001/users/profile/student/' + this.idUser + '/?format=json';
  private url2 = 'http://localhost:8001/courses/students/courses/' + this.idUser + '/subjects/?format=json';

  constructor(private httpClient: HttpClient) { }

  getProfile(){
    return this.httpClient.get(this.url);
  }

  getAsignatures(){
    return this.httpClient.get(this.url2);
  }
}
