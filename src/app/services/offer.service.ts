import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  deleteOffer(id: number) {
    return this.http.get(`${baseUrl}/admin/offer/delete/${id}`);
  }

  constructor(private http: HttpClient) { }
  createOffer(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });
    return this.http.post(`${baseUrl}/admin/offer/add`, data);
  }

  getOffers() {
    return this.http.get(`${baseUrl}/admin/offer/get-offer`);
  }

  getOffersUser() {
    return this.http.get(`${baseUrl}/offer/get-offers`);
  }
}
