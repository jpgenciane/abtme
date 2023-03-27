import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PriorityserviceService } from 'src/app/service/priorityservice.service';

interface Risk {
  value: string;
  viewValue: string;
  color:string;
}

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  form!:FormGroup;
  submitted:boolean;
  PriorityName:string;
  priorityLevel:string;
  priorityStatus:string;
  priorityDesc:string;
  dueDate:string;
  priorityName: any;
  
  constructor(private formBuilder : FormBuilder,private service:PriorityserviceService){}

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      priorityName:['',[Validators.required]],
      priorityLevel:['',[Validators.required]],
      priorityStatus:['',[Validators.required]],
      priorityDesc:['',[Validators.required]],
      dueDate:['',[Validators.required]]
     
    })
  }

  risk: Risk[] = [
    {value: 'low', viewValue: 'Low',color:'#b1ea78'},
    {value: 'normal', viewValue: 'Normal',color:'#7ddc20'},
    {value: 'high', viewValue: 'High',color:'#ffa500'},
    {value: 'critical', viewValue: 'Critical',color:'#ff2500'},
  ];
  

  status: Status[] = [
    {value: 'not started', viewValue: 'Not Started'},
    {value: 'in progress', viewValue: 'In Progress'},
    {value: 'done', viewValue: 'Done'},
  ];

  sendData(){
    const data={
      priorityName: this.priorityName,
      priorityLevel: this.priorityLevel,
      priorityStatus: this.priorityStatus,
      priorityDesc: this.priorityDesc,
      dueDate: this.dueDate
    }
    this.service.addPriority(data).subscribe();
    window.location.reload();
    
  }
}
