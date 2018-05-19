import { Injectable } from '@angular/core';

import { loginTest } from './loginTest';
import { LoginComponent } from './login/login.component';
import { LoginInfo } from './loginInfo';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  baseUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) { }

  attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post('http://localhost:8080/login', credentials);
  }


}
