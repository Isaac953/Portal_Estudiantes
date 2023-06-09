import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public urlLogin = 'http://localhost:8001/users/login/student/';

  constructor(private httpClient: HttpClient) { }

  sendData(data: any): Observable<any> {
    console.log(data);
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    // console.log(body);
    return this.httpClient.post(this.urlLogin, data, {headers:headers});

    // return this.httpClient.post<any>(this.urlLogin, body, {headers:headers});
  }
}
