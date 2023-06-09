import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  Priority } from '../account';

@Injectable({
  providedIn: 'root'
})
export class PriorityserviceService {

  private apiUrl = 'http://localhost:3000/priority'
  constructor(private http:HttpClient, private router:Router) { }

  addPriority(priority:Priority):Observable<Priority>{
    console.log("pumasok");
    return this.http.post<Priority>(this.apiUrl,priority);
  }

  getAllPriority():Observable<Priority[]>{
    return this.http.get<Priority[]>(this.apiUrl);
  }



  delete(priority:Priority):Observable<Priority>{
    const url = `${this.apiUrl}/${priority.id}`;
    return this.http.delete<Priority>(url)
  }


  update(priority:Priority,updatedPriority:Priority):Observable<Priority>{
    const url= `${this.apiUrl}/${priority.id}`;
    return this.http.put<Priority>(`${this.apiUrl}/${priority.id}`,updatedPriority);
  }
}
