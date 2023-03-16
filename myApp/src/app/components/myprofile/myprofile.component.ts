import { Component,Input, OnInit } from '@angular/core';
import { Account } from 'src/app/account';
import { AccountserviceService } from 'src/app/service/accountservice.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  @Input() data:any;
  @Input() id:number;
  currentUser = JSON.parse(localStorage.getItem('id') || '{}');
  account:Account;
  names:any;
  nameArr:[];
  
  constructor(private service:AccountserviceService){}
  ngOnInit(): void {
    
    this.service.getCurentAccountData(this.id).subscribe(res=>{
      this.account=res;
      this.names=res.skill;
      this.nameArr=this.names.split(',');
      console.log("id:"+this.id);
    });
  }
}
