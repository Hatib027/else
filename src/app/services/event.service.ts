import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from "./helper"
@Injectable({
  providedIn: 'root'
})
export class EventService {
  deleteEvent(id: number) {
    // event/delete/{id}
    return this.http.get(`${baseUrl}/admin/event/delete/${id}`);
  }

  constructor(private http: HttpClient) { }
  createEvent(data: any) {
    return this.http.post(`${baseUrl}/admin/event/add`, data)
  }
  getEvents() {
    return this.http.get(`${baseUrl}/admin/event/get-events`);
  }

  getUserEvents() {
    return this.http.get(`${baseUrl}/event/get-events`);
  }

}
