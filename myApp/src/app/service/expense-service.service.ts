import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Account, Expense } from '../account';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {
  private apiUrl = 'http://localhost:3000/expense'
  constructor(private http:HttpClient, private router:Router) { }


  addExpense(expense:Expense):Observable<Expense>{
    console.log(expense);
    return this.http.post<Expense>(this.apiUrl,expense);
  }
  
  getAllExpense():Observable<Expense[]>{
    return this.http.get<Expense[]>(this.apiUrl);
  }

}
