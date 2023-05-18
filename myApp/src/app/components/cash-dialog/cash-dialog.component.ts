import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cash } from 'src/app/account';
import { CashServiceService } from 'src/app/service/cash-service.service';

interface Transaction {
  value: string;
  viewValue: string;
  img:string;
}


@Component({
  selector: 'app-cash-dialog',
  templateUrl: './cash-dialog.component.html',
  styleUrls: ['./cash-dialog.component.css']
})
export class CashDialogComponent implements OnInit {
  id = JSON.parse(localStorage.getItem('id') || '{}');
  transactionType:string;
  depositAmount:number;
  form!:FormGroup;
  submitted:boolean;
  today= new Date();
  homeWallet:number=0;
  bankWallet:number=0;
  img:string;
  transactionName:string="transaction id: ";
  userCashActivity:Cash[]=[];
  lastTransaction:number=0;
  constructor(private formBuilder : FormBuilder,private service:CashServiceService){}
  
  ngOnInit(): void {
    this.getHomeWallet();
    this.form=this.formBuilder.group({
      transactionType:['',[Validators.required]],
      depositAmount:['',[Validators.required]]
    })
  }

  transaction: Transaction[] = [
    {value: 'home', viewValue: 'Home Wallet',img:'assets/img/food.svg'},
    {value: 'bank', viewValue: 'Bank Savings',img:'assets/img/clothes.svg'},
    
  ];

  deposit(){
    if(this.transactionType ==="home"){
      this.img='assets/img/food.svg';
      console.log("pumasok sa low")
      
      this.homeWallet=this.homeWallet+this.depositAmount;
    }
    if(this.transactionType==="bank"){
      this.img='assets/img/clothes.svg';
      console.log("pumasok sa Normal")
      this.bankWallet+=this.depositAmount;
    }
    this.transactionName=this.transactionName+localStorage.getItem('id');
    const data={
      userId:this.id,
      transactionType:this.transactionType,
      depositAmount:this.depositAmount,
      homeWallet:this.homeWallet,
      bankWallet:this.bankWallet,
      transactionTypeImg:this.img,
      transactionCreateName:this.transactionName,
      transactionCreateNameDate:this.today.toString(),
      transactionUpdateName:this.transactionName,
      transactionUpdateNameDate:this.today.toString()
    }

    this.service.addCash(data).subscribe();
     window.location.reload();

  }

  getHomeWallet(){
    this.homeWallet=0;
    this.lastTransaction=0;
    this.userCashActivity=[];
    this.service.getAllCash().subscribe(res => {

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
