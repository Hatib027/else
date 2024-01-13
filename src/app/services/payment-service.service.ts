import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private httpClient: HttpClient) { }



  public addProduct(payment: any): Observable<any> {

    console.log("sj");
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });
    return this.httpClient.post(`${baseUrl}/payment/addpayment`, payment);

  }

  public getBanks() {
    return this.httpClient.get(`${baseUrl}/payment/getAllBank`);
  }

  public addFile(file: File) {
    const data: FormData = new FormData();
    data.append('file', file);
    const newRequest = new HttpRequest('POST', `${baseUrl}/payment/storeFile`, data, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.httpClient.request(newRequest);
  }


  public getPaymentHistoryIB() {
    return this.httpClient.get(`${baseUrl}/payment/payment-history`)
  }
  public getPaymentHistoryUpi() {
    return this.httpClient.get(`${baseUrl}/payment/paymentUPI-history`)
  }

  public addPaymentUpi(paymentupi: any): Observable<any> {

    console.log("sj");
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });
    return this.httpClient.post(`${baseUrl}/payment/addmoneytoupi`, paymentupi);


  }

  public getAllIfcc() {
    return this.httpClient.get(`${baseUrl}/admin/fetchAllUserIfcc`);
  }
  public getAllUpi() {
    return this.httpClient.get(`${baseUrl}/admin/fetchAllUserUpi`);
  }

  public getByUpiId(id: any) {
    return this.httpClient.get(`${baseUrl}/admin/findByUpiId/${id}`);
  }
  public getByIbId(id: any) {
    return this.httpClient.get(`${baseUrl}/admin/findByIbId/${id}`);
  }


  public actionDepositRequest(payment: any) {
    return this.httpClient.post(`${baseUrl}/admin/acceptOrRejectFundReqIb`, payment);
  }
  public actionDepositRequestUpi(payment: any) {
    return this.httpClient.post(`${baseUrl}/admin/acceptOrRejectFundReqUpi`, payment);
  }








}
