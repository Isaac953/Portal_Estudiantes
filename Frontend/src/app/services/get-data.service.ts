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
  rolUser = this.dataLoginJ.rol;

  constructor(private httpClient: HttpClient) { }

  idUser= this.dataLoginJ.id_student;
  idTeacher= this.dataLoginJ.id_teacher;
  urlt: any;
  urlc: any;
  urla: any;
  urlcrud: any;

  private url = 'http://localhost:8001/users/profile/student/' + this.idUser + '/?format=json';
  private url2 = 'http://localhost:8001/users/profile/teacher/' + this.idTeacher + '/?format=json';
  private url3 = 'http://localhost:8001/courses/students/courses/' + this.idUser + '/subjects/?format=json';
  private url4 = 'http://localhost:8001/courses/teachers/' + this.idTeacher + '/subjects/?format=json';
  private url5 = 'http://localhost:8001/courses/students/' + this.idUser + '/courses/current/';

  getProfile(){
    return this.httpClient.get(this.url);
  }

  getProfileTeacher(){
    return this.httpClient.get(this.url2);
  }

  getAsignatures(){
    return this.httpClient.get(this.url3);
  }

  getTeacherSubject(id:any){
    this.urlt = 'http://localhost:8001/users/profile/teacher/' + id + '/?format=json';
    return this.httpClient.get(this.urlt);
  }

  getAsignaturesTeacher(){
    return this.httpClient.get(this.url4);
  }

  getCourse(){
    return this.httpClient.get(this.url5);
  }

  getAsigContent(id:any){
    this.urlc = 'http://localhost:8001/courses/students/courses/subjects/'+ id +'/contents/?format=json'
    return this.httpClient.get(this.urlc);
  }

  getCrudContent(id:any){
    this.urlcrud = 'http://localhost:8001/courses/teachers/subjects/contents/'+ id +'/?format=json'
    return this.httpClient.get(this.urlcrud);
  }

  // getActivities(id:any){
  //   http://localhost:8001/courses/teachers/subjects/3/contents/
  //   this.urla = 'http://localhost:8001/courses/students/courses/subjects/contents/'+ id +'/?format=json'
  //   return this.httpClient.get(this.urla);
  // }
}
