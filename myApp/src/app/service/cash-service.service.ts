import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cash, Expense } from '../account';

@Injectable({
  providedIn: 'root'
})
export class CashServiceService {



  private apiUrl = 'http://localhost:3000/cash'
  constructor(private http:HttpClient, private router:Router) { }

  addCash(cash:Cash):Observable<Cash>{
    return this.http.post<Cash>(this.apiUrl,cash)
  }
  
  getAllCash():Observable<Cash[]>{
    return this.http.get<Cash[]>(this.apiUrl);
  }
}
