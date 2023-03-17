import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/account';
import { AccountserviceService } from 'src/app/service/accountservice.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  form!:FormGroup;
  username:string;
  password:string;
  submitted:boolean=false;
  constructor(private formBuilder : FormBuilder, private service: AccountserviceService){}

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  sendData(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    const data={
      username: this.username,
      password: this.password
    }
    console.log(data);
    this.service.login(data);
   
    
  
  }

}
