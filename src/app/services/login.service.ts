import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatus = new Subject<Boolean>();
  constructor(private httpClient: HttpClient) { }

  public generateToken(loginDetails: any) {
    return this.httpClient.post(`${baseUrl}/generate-token`, loginDetails);
  }

  public isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;


    console.log(expiry * 1000 > Date.now());

    return expiry * 1000 > Date.now();
  }

  public getCurrentEmployee() {
    return this.httpClient.get(`${baseUrl}/current-user`);
  }

  public loginUser(token: any) {
    localStorage.setItem("token", token);
    return true;
  }

  public isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token == undefined || token == '' || token == null) {
      return false;
      this.logout();
    } else {
      return true;
    }
  }



  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('psaxshyagsgajjssgahsjsj');
    return true;
  }

  public getToken() {
    return localStorage.getItem("token");
  }

  //Set User details
  public setUser(user: any) {

    user.id = '';
    localStorage.setItem("user", JSON.stringify(user));

  }

  public getUser() {
    let user = localStorage.getItem("user");
    if (user != null) {
      return JSON.parse(user);
    } else {
      this.logout();
      return null;
    }

  }

  //get User role

  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
