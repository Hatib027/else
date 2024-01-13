import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminbankDetailsService {

  constructor(private httpClient: HttpClient) { }

  public addBankDetailsAdmin(admin: any) {

    return this.httpClient.post(`${baseUrl}/admin/addBankDetails`, admin);
  }

  public getBankDetailsAdmin(code: any) {

    return this.httpClient.get(`${baseUrl}/admin/getBankDetailsAdmin/${code}`);
  }


  public getBankDetailsAdminUser() {

    return this.httpClient.get(`${baseUrl}/payment/getBankDetails-Admin`);
  }
}
