import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  private url2 = 'http://127.0.0.1:8000/testApi/api';

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(this.url);
  }

  getClothes(){
    return this.httpClient.get(this.url2);
  }
}
