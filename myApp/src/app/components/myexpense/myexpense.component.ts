import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Expense } from 'src/app/account';
import { ExpenseServiceService } from 'src/app/service/expense-service.service';
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
  
  constructor(public dialog: MatDialog,private service:ExpenseServiceService){
   
  }
  ngOnInit(): void {
    this.getUserExpense();
  }

  addExpense(){
    this.dialog.open(ExpenseDialogComponent, {
      width:'40%',
      height:'auto',
    });
  }

  getUserExpense(){
    this.userExpense=[];
    this.service.getAllExpense().subscribe(res=>{
      this.data=res;
      for(let userEx of res){
        if(this.id==userEx.userId){
          this.userExpense.push(userEx);
        }else{

        }
      }
    })
  }
}
