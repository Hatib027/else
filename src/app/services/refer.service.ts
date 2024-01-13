import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ReferService {

  constructor(private httpClient: HttpClient) { }


  public getYourRefer(refercode: string) {

    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.post(`${baseUrl}/referral/getYourRefer`, refercode);
  }

  public earningFromRefer() {


    return this.httpClient.get(`${baseUrl}/referral/getReferHistory`);
  }


  public getReferPercentage() {
    return this.httpClient.get(`${baseUrl}/admin/getReferPercentage`);
  }

  public addReferPercentage(refer: any) {
    return this.httpClient.post(`${baseUrl}/admin/addReferPercentage`, refer);
  }
}
