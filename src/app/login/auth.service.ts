import { AppConstants } from './app.constants';
import { Observable } from 'rxjs';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { EventEmitter} from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BrowserModule } from '@angular/platform-browser'; 
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export const TOKEN_NAME: string = 'jwt_token';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  
  constructor(
    private http: Http,
    private router: Router) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }
//
  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  // Remover o token
  removeToken(): void {
    localStorage.removeItem(TOKEN_NAME);
    localStorage.removeItem('user');
  }
  // Gerar data de expiração do token
   getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  //Expirar o token
  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getToken();
    }

    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);

    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  // Fazer login
  login(user): Promise<any> {
    return this.http
      .post(AppConstants.API_ROOT + '/login', user, { headers: this.headers })
      .toPromise()
      .then(res => res);      
  }

  // usuarioEstaUtenticado(){
  //   return this.usuarioAutenticado;
  // }
}
