import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    API_URL = 'http://localhost:8080';
    TOKEN_KEY = 'token';

    constructor(private http: HttpClient, private router: Router) { }

    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        this.router.navigateByUrl('/');
    }

    login(email: string, pass: string) {
        const headers = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
        };

        const data = {
            username: email,
            password: pass
        };

        this.http.post<any>("http://localhost:8080/login", data, { observe: 'response'})
      .subscribe(resp => {
                console.log(resp.headers.get('Cache-Control'));
                localStorage.setItem(this.TOKEN_KEY, resp.headers.get('Cache-Control'));

                this.router.navigateByUrl('/admin');
            }
        );
    }

    getAccount() {
        return this.http.get(this.API_URL + '/employee');
    }
}