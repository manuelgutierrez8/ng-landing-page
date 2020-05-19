import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood(type = '', queryString = '', page = 1): Observable<any> {
    let url = `${environment.API_URL}/menu?page=${page}&category=${type}${queryString ? `&query=${queryString}` : ''}`;

    if(!type) {
      url = `${environment.API_URL}/menu?page=${page}${queryString ? `&query=${queryString}` : ''}`;
    }

    return this.http.get<HttpResponse<Object>>(url, { observe: 'response' });
  }

  getCategories(): Observable<any> {
    return this.http.get<HttpResponse<Object>>(`${environment.API_URL}/categories`, { observe: 'response' });
  }
}