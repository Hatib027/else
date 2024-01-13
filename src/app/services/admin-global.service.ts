import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AdminGlobalService {

  constructor(private httpClient: HttpClient) { }

  public getAllUser() {
    return this.httpClient.get(`${baseUrl}/admin/fetchAllUser`);
  }

  public getAdminHomeData() {
    return this.httpClient.get(`${baseUrl}/admin/getAdminHomePage`);
  }

  public getLevelReport() {
    return this.httpClient.get(`${baseUrl}/admin/getLevelWiseReport`, { responseType: 'blob' });
  }

  public getReferReport() {
    return this.httpClient.get(`${baseUrl}/admin/getExcelRefer`, { responseType: 'blob' });
  }

  public report(id: number) {
    return this.httpClient.get(`${baseUrl}/admin/getExcelRefer/${id}`, {
      responseType: 'blob'
    });
  }
}
