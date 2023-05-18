import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cash } from 'src/app/account';
import { CashServiceService } from 'src/app/service/cash-service.service';
import { ExpenseServiceService } from 'src/app/service/expense-service.service';
import { PriorityserviceService } from 'src/app/service/priorityservice.service';

interface Risk {
  value: string;
  viewValue: string;
  img:string;
}

@Component({
  selector: 'app-expense-dialog',
  templateUrl: './expense-dialog.component.html',
  styleUrls: ['./expense-dialog.component.css']
})
export class ExpenseDialogComponent {
  form!:FormGroup;
  id = JSON.parse(localStorage.getItem('id') || '{}');
  submitted:boolean;
  expenseName:string;
  expenseType:string;
  expensePrice:number;
  expenseDate:string;
  today= new Date();
  img:string;
  // userCashActivity:Cash[]=[];
  // lastTransaction:number=0;
  // latestCashData:Cash;
  // homeWallet:number=0;
  // bankWallet:number=0;
  constructor(private formBuilder : FormBuilder,private service:ExpenseServiceService,private service1:CashServiceService ){}

  ngOnInit(): void {
  
    this.form=this.formBuilder.group({
      expenseName:['',[Validators.required]],
      expenseType:['',[Validators.required]],
      expenseDate:['',[Validators.required]],
      expensePrice:['',[Validators.required]]
    })
  }

  risk: Risk[] = [
    {value: 'food', viewValue: 'Food',img:'assets/img/food.svg'},
    {value: 'clothes', viewValue: 'Clothes',img:'assets/img/clothes.svg'},
    {value: 'loan', viewValue: 'Loan',img:'assets/img/loan.svg'},
    {value: 'transportation', viewValue: 'Transportation',img:'assets/img/transportation.svg'},
    {value: 'etc', viewValue: 'Etc.',img:'assets/img/other.svg'},
  ];
  



  sendData(){
    if(this.expenseType ==="food"){
      this.img='assets/img/food.svg';
      console.log("pumasok sa low")
    }
    if(this.expenseType ==="clothes"){
      this.img='assets/img/clothes.svg';
      console.log("pumasok sa Normal")
    }
    if(this.expenseType ==="loan"){
      this.img='assets/img/loan.svg';
      console.log("pumasok sa High")
    }
    if(this.expenseType ==="transportation"){
      this.img='assets/img/transportation.svg';
      console.log("pumasok sa Critical")
    }
    if(this.expenseType ==="etc"){
      this.img='assets/img/other.svg';
      console.log("pumasok sa Critical")
    }
    const data={
      userId:this.id,
      ExpenseName:this.expenseName,
      ExpensePrice:this.expensePrice,
      ExpenseDate:this.expenseDate,
      ExpenseType:this.expenseType,
      ExpenseTypeImg:this.img,
      EpenseCreateName:this.expenseName,
      ExpenseCreateNameDate:this.today.toString(),
      ExpenseUpdateName:this.expenseName,
      ExpenseUpdateNameDate:this.today.toString()

    }
    this.service.addExpense(data).subscribe();
    window.location.reload();
  }

  // getHomeWallet(){
  //   this.homeWallet=0;
  //   this.lastTransaction=0;
  //   this.userCashActivity=[];
  //   this.service1.getAllCash().subscribe(res => {

  //     for(let user of res){
  //       if(this.id == user.userId){
  //         this.userCashActivity.push(user);
  //       }
  //     }
  //     this.lastTransaction=this.userCashActivity.length;
  //     this.latestCashData=this.userCashActivity[this.lastTransaction-1];
  //   })
  // }

}
