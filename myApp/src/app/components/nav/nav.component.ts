import { EventEmitter } from '@angular/core';
import { Component, OnInit,Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() data:any;
  @Output() show=new EventEmitter<string>();
  showProfile:boolean=false;
  showPriorities:boolean=false;
  showDashboard:boolean=false;
  constructor(private router:Router){}
  routerLinkActive:boolean=false 
  ngOnInit(): void {
  this.routerLinkActive=true;

  }

  logout(){
    localStorage.removeItem("sessionUsername");
    localStorage.removeItem("sesssionFirsttime");
    this.router.navigate(['']);
  }

  showProfileAction(){
    this.show.emit("Profile");
    this.showProfile=true;
    this.showPriorities=false;
  }

  showPrioritiesAction(){
    this.show.emit("Priorities");
    this.showPriorities=true;
    this.showProfile=false;
  }
}
