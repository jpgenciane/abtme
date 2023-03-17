import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private _location: Location, private router: Router){}
  ngOnInit(): void {
    if(localStorage.getItem('sessionUsername')!==null){
      this.router.navigate(['dashboard']);
    }
  }
}
