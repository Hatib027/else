import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private httpClient: HttpClient) { }

  public addEmployeeOrSendOtp(user: any) {

    return this.httpClient.post(`${baseUrl}/user/addUser`, user);
  }

  public verifyOtp(otp: any, user: any) {
    return this.httpClient.post(`${baseUrl}/user/verify-otp`, { "otp": otp, "username": user });
  }

  public verifyEmail(email: string) {

    return this.httpClient.post(`${baseUrl}/user/email-verify`, email);
  }

  public getEncryptedData(id: string) {
    return this.httpClient.post(`${baseUrl}/user/getEncryptedData`, id);
  }

  public changePassword(password: any, username: any) {

    return this.httpClient.post(`${baseUrl}/user/change-password`, { "password": password, "token": username });
  }

}
