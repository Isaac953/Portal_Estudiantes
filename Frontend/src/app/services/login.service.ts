import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin = 'http://localhost:8001/users/login/student/';

  params = new HttpParams({
    fromObject: { Name : 'name',
    Password : 'password',
    }
  });

  constructor(private httpClient: HttpClient) { }

  sendData(){
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    // return this.httpClient.options(this.urlLogin);
    return  this.httpClient.post(this.urlLogin, this.params, { headers });
  }
}
