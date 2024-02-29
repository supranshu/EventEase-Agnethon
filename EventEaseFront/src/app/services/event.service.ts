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

  accept(evName:any){
    const role=localStorage.getItem("role")
    console.log(role)
    console.log(evName)
    return this.http.get<string>(`${baseUrl}/accept/${role}/${evName}`)
  }

  reject(evName:any){
    const role=localStorage.getItem("role")
    console.log(role)
    console.log(evName)
    return this.http.get<string>(`${baseUrl}/reject/${role}/${evName}`)
  }

  getEventsByCommittee(comName:any){
    return this.http.get(`${baseUrl}/ev-by-com-name/${comName}`)

  }
  getApprovedEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}/approved-events`);
    // Replace '/approved-events' with the appropriate endpoint in your backend
  }

  eventExist(date:string,venue:string){
    return this.http.get(`${baseUrl}/exist/${date}/${venue}`)
  }
}
