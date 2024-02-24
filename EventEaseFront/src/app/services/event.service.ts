import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from '../helper';
;

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEventsByCollege(collegeName: string): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/ev-by-clg-name/${collegeName}`);
  }

  // Add methods for event approval/rejection if needed
}
