import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  postContact(contactInfo: any): Observable<any> {
    let url = `${environment.API_URL}/contact`;
debugger;
    return this.http.post<HttpResponse<Object>>(url, contactInfo);
  }
}
