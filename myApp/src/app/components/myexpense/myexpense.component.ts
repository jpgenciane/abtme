import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cash, Expense } from 'src/app/account';
import { CashServiceService } from 'src/app/service/cash-service.service';
import { ExpenseServiceService } from 'src/app/service/expense-service.service';
import { CashDialogComponent } from '../cash-dialog/cash-dialog.component';
import { ExpenseDialogComponent } from '../expense-dialog/expense-dialog.component';

@Component({
  selector: 'app-myexpense',
  templateUrl: './myexpense.component.html',
  styleUrls: ['./myexpense.component.css']
})
export class MyexpenseComponent implements OnInit{
  id = JSON.parse(localStorage.getItem('id') || '{}');
  currentDate = new Date();
  userExpense:Expense[]=[];
  data:Expense[]=[];
  totalExpense:number;
  len:number=0;
  userCashActivity:Cash[]=[];
  lastTransaction:number=0;
  latestCashData:Cash;
  homeWallet:number=0;
  bankWallet:number=0;
  constructor(public dialog: MatDialog,private service:ExpenseServiceService, private service1:CashServiceService){
   
  }
  ngOnInit(): void {
    this.getHomeWallet()
    this.getUserExpense();
  }

  addExpense(){
    this.dialog.open(ExpenseDialogComponent, {
      width:'40%',
      height:'auto',
    });
  }

  addCash(){
    this.dialog.open(CashDialogComponent, {
      width:'20%',
      height:'auto',
    });
  }

  getUserExpense(){
    this.userExpense=[];
    this.totalExpense=0;
    this.service.getAllExpense().subscribe(res=>{
      this.data=res;
      for(let userEx of res){
        if(this.id==userEx.userId){
          this.userExpense.push(userEx);
          this.totalExpense+=userEx.ExpensePrice;
          this.len=this.userExpense.length;
        }else{

        }
      }
    })
  }

  getHomeWallet(){
    this.homeWallet=0;
    this.lastTransaction=0;
    this.userCashActivity=[];
    this.service1.getAllCash().subscribe(res => {

      for(let user of res){
        if(this.id == user.userId){
          this.userCashActivity.push(user);
        }
      }
      for(let userMe of this.userCashActivity){
        this.lastTransaction+=userMe.homeWallet
      }
    })
  }
}
