import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class WithdrawlService {

  constructor(private httpClient: HttpClient) { }

  public getUserInvestment() {
    return this.httpClient.get(`${baseUrl}/withdrawl/getUserInvestment`);
  }

  public getUpiActionAdmin() {
    return this.httpClient.get(`${baseUrl}/admin/getUpiAction`);
  }

  public addUpiActionAdmin(upiAction: any) {
    return this.httpClient.post(`${baseUrl}/admin/addUpiAction`, upiAction);
  }

  onSubmit(data: any) {
    return this.httpClient.post(`${baseUrl}/withdrawl/ib-widthrawl`, data);
  }


  onSubmitUpi(data: any) {
    return this.httpClient.post(`${baseUrl}/withdrawl/upi-widthrawl`, data);
  }

  public getUpiActionUser() {
    return this.httpClient.get(`${baseUrl}/withdrawl/getUpiAction`);
  }

  public getUpiList() {
    return this.httpClient.get(`${baseUrl}/admin/upi-widthrawl-all`);
  }
  public getIbList() {
    return this.httpClient.get(`${baseUrl}/admin/ib-widthrawl-all`);
  }

  public getUserInvestByUsername(username: any) {
    // console.log(username);

    return this.httpClient.post(`${baseUrl}/admin/getInvestmentData`, { "username": username });
  }

  public getUserRequestUpi(id: any) {
    return this.httpClient.get(`${baseUrl}/admin/getUpiDataById/${id}`);
  }

  public getUserRequestIb(id: any) {
    return this.httpClient.get(`${baseUrl}/admin/getIbDataById/${id}`);
  }

  public actionWithdrawlRequestUpi(withdrawl: any) {
    return this.httpClient.post(`${baseUrl}/admin/acceptWithdrawlRequestUpi`, withdrawl);
  }

  public actionWithdrawlRequestIb(withdrawl: any) {
    return this.httpClient.post(`${baseUrl}/admin/acceptWithdrawlRequestIb`, withdrawl);
  }

  public withdrawlListUserUpi() {
    return this.httpClient.get(`${baseUrl}/withdrawl/getWithdrawlRequestUpi`);
  }

  public withdrawlListUserIb() {
    return this.httpClient.get(`${baseUrl}/withdrawl/getWithdrawlRequestIb`);
  }
}
