import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Account } from 'src/app/account';
import { AccountserviceService } from 'src/app/service/accountservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form!:FormGroup;
    skills:string;
    username:string;
    password:string;
    firstName:string;
    lastName:string;
    address:string;
    email:string;
    number:string;
    houseNumber:string;
    streetName:string;
    subBarName:string;
    city:string;
    province:string;
    country:string;
    submitted:boolean;
    account:Account[];
    unique:boolean;
    alertData:Account;
  constructor(private formBuilder : FormBuilder, private service: AccountserviceService,private router:Router){}
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required]],
      number:['',[Validators.required]],
      houseNumber:['',[Validators.required]],
      streetName:['',[Validators.required]],
      subBarName:['',[Validators.required]],
      city:['',[Validators.required]],
      province:['',[Validators.required]],
      country:['',[Validators.required]],
      skills:['',[Validators.required]]
    })
  }
  signup(){
    //console.log("Skill"+this.skill);
    this.submitted=true;
    if(this.form.invalid){
      console.log("Dito Napasok");
     
      return;
    }
    const data={
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      number:this.number,
      skill:this.skills,
      address:{
        houseNumber:this.houseNumber,
        streetName:this.streetName,
        subdivisionBarangay:this.subBarName,
        city:this.city,
        province:this.province,
        country:this.country,
      }
    }
    this.alertData=data;
    console.log(data);
    this.service.getAllAccounts().subscribe(res =>{
      this.account=res;
      if(res.length==0){
        console.log("walang laman ung db");
        this.unique=true;
      }else{
       
        //for condition
        for(let acc of this.account){
          if(data.username!==acc.username){
            this.unique=true;
          }else{
            this.unique=false;
            break;
          }
        }
      }

      if(this.unique==true){
        console.log("Username is Unique");
         this.service.signup(data).subscribe();
         this.successNotification();
         
      }else{
         Swal.fire({
          title: 'Warning!',
          text:  "The @"+this.alertData.username+ " is already exist",
          icon: 'warning',
        });
        
        this.username='';
      }

    })
   
  }


  //sucess alert popup
  successNotification() {
    Swal.fire({ 
      title: 'Sucess!',
      text: 'User '+ this.alertData.username + ' is added in the list',
      icon: 'success',
      }).then((result) => {
        if (result.value) {
          this.router.navigate(['']);
      }
      });
    }




}


