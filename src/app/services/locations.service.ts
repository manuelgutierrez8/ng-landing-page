import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getLocations(type = '', queryString = ''): Observable<any> {
    let url = `${environment.API_URL}/locations?type=${type}${queryString ? `&query=${queryString}` : ''}`;

    return this.http.get<HttpResponse<Object>>(url, { observe: 'response' });
  }
}
