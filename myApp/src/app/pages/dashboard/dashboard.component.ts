import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbAlertConfig, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { interval, timeout, timer } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username = localStorage.getItem('sessionUsername');
  id = JSON.parse(localStorage.getItem('id') || '{}');
  Profile:Boolean=false;
  display:boolean=true;
  constructor(alertConfig: NgbAlertConfig, private router:Router){
    alertConfig.type = 'success';
    alertConfig.dismissible = true ;

  }
  ngOnInit(): void {
    if(localStorage.getItem('sessionUsername')==null){
      this.router.navigate(['']);
    }
    this.startCountdown();
   
}
startCountdown() {
  
  let counter = 5
  if(localStorage.getItem('sesssionFirsttime')==="false"){
    this.display=false;
  }
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
    if (counter < 0 ) {
      clearInterval(interval);
      if(localStorage.getItem('sesssionFirsttime')==="true"){
        this.display=false;
        console.log(this.display)
        localStorage.setItem('sesssionFirsttime','false');
        
      }
    }
   
  }, 1000);
}
showProfile($event:any){
  this.Profile=$event;
}
 
}
