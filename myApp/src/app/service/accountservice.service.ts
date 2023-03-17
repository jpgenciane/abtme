import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable,of, from } from 'rxjs';

import { Account } from '../account';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  [x: string]: any;
  account:Account;
  user:any;
  authentication:boolean;
  private apiUrl = 'http://localhost:3000/account'
  constructor(private http:HttpClient, private router:Router) { }

  login(account:any){
     this.http.get<any>(this.apiUrl).subscribe(res => {
      const user=res.find((a:Account)=> {
        this.user={
          id:a.id,
          username:a.username,
          password:a.password
        }
      return this.user.username === account.username && this.user.password === account.password
      });
      
      if((user)){
        console.log("Welcome "+this.user.username);
        localStorage.setItem('sessionUsername',this.user.username);
        localStorage.setItem('id',this.user.id);
        localStorage.setItem('sesssionFirsttime','true');
        this.router.navigate(['dashboard']);
      }else{
        console.log("Wrong Credentials");
      }
    })
  }

  signup(account:Account):Observable<Account>{
    return this.http.post<Account>(this.apiUrl,account);
  }

  getAllAccounts():Observable<Account[]>{
    return this.http.get<Account[]>(this.apiUrl);
  }

  getCurentAccountData(id:number):Observable<Account>{
    return this.http.get<Account>(`${this.apiUrl}/${id}`);
  }
  
  test(){
    console.log();gi
  }
}
