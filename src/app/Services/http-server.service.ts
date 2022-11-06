import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_API_SERVER_RANDOM_USER = 'https://randomuser.me/api/?result=';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //Authorization: 'my-auth-token'
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  getRandomUsers(num: number = 1): Observable<any> {
    const url = `${this.REST_API_SERVER_RANDOM_USER}` + num;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
