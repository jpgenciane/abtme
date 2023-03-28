import { Component , OnInit, ViewEncapsulation, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Priority } from 'src/app/account';
import { PriorityserviceService } from 'src/app/service/priorityservice.service';
import { DialogComponent } from '../dialog/dialog.component';
import Swal from 'sweetalert2';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Status {
  value: string;
  viewValue: string;
}

interface StatusDone {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class PrioritiesComponent implements OnInit{
  constructor(private formBuilder : FormBuilder,public dialog: MatDialog, private service:PriorityserviceService){}
  @Input() id:number;
  formStatus!:FormGroup;
  priority:Priority[];
  showPriority:Priority;
  condition:boolean=false;
  priorityStatus:string;
  updatedPrio:Priority;
  donePrio:Priority[]=[];
  activePrio:Priority[]=[];
  data:Priority[];
  notStarted:Priority[];
  userPriority:Priority[]=[];
  done:boolean=true;
  ngOnInit(): void {
   this.getUserPriority();
   this.getAllActive();
   
   console.log(this.showPriority);
   
   this.formStatus=this.formBuilder.group({
    priorityStatus:['',[]]
   
   
  })
  }
  
  status: Status[] = [
    {value: 'not started', viewValue: 'Not Started'},
    {value: 'in progress', viewValue: 'In Progress'},
    {value: 'done', viewValue: 'Done'},
  ];

  statusDone: StatusDone[] = [
    {value: 'not started', viewValue: 'Not Started'},
    {value: 'in progress', viewValue: 'In Progress'},
  ];

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'40%',
      height:'auto',
    });
  }

  getAllPriority(){
    this.service.getAllPriority().subscribe(x=>{
      this.priority=x;
      console.log(this.priority);
    })
  }
  
  priorityAction(item:any){
    this.showPriority=item;
    this.condition=true;
    this.getDone();
  }

  delete(priority:Priority){
    this.deleteAlertConfirmation(priority);
  }

  edit(){
    if(this.priorityStatus==null){
      const updatedPrio={
        priorityName:this.showPriority.priorityName,
        priorityLevel:this.showPriority.priorityLevel,
        priorityStatus:this.showPriority.priorityStatus,
        dueDate:this.showPriority.dueDate,
        priorityDesc:this.showPriority.priorityDesc,
        color:this.showPriority.color,
        userId:this.id
      }  
      this.updatedPrio=updatedPrio; 
    }else{
      if(this.priorityStatus=="done"){
       Swal.fire('Done!', 'Priority Done.', 'success');
            const updatedPrio={
            priorityName:this.showPriority.priorityName,
            priorityLevel:this.showPriority.priorityLevel,
            priorityStatus:this.priorityStatus,
            dueDate:this.showPriority.dueDate,
            priorityDesc:this.showPriority.priorityDesc,
            color:this.showPriority.color,
            userId:this.id
        }
          this.updatedPrio=updatedPrio; 
          
      }else{
        const updatedPrio={
        priorityName:this.showPriority.priorityName,
        priorityLevel:this.showPriority.priorityLevel,
        priorityStatus:this.priorityStatus,
        dueDate:this.showPriority.dueDate,
        priorityDesc:this.showPriority.priorityDesc,
        color:this.showPriority.color, 
        userId:this.id
    }
    
      this.updatedPrio=updatedPrio; 
      //this.priorityAction(this.updatedPrio);
    }
    
      console.log("PUmasok sa else")
  }
    console.log("value ng prio: "+ this.updatedPrio);
    this.service.update(this.showPriority,this.updatedPrio).subscribe(() =>this.getUserPriority());
    this.condition=false;
    // this.priorityAction(this.updatedPrio);
   
    
}


  deleteAlertConfirmation(priority:Priority) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process will delete Priority '+ this.showPriority.priorityName,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Removed!', 'Priority '+this.showPriority.priorityName+' deleted.', 'success');
        this.service
        .delete(priority)
        .subscribe(() =>this.getUserPriority());
        this.condition=false;
        //this.getAllActive();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Priority is still in our database.', 'error');
      }
    });
  }

  getUserPriority(){
    this.userPriority=[];
    this.service.getAllPriority().subscribe(res =>{
      for(let userPrio of res ){
        if(this.id==userPrio.userId){
          this.userPriority.push(userPrio);
        }
      }
      this.getAllActive();
    })
 
  }

  getAllActive(){
    this.activePrio=[];
    this.donePrio=[];
    this.notStarted=[];
    
      for(let item of this.userPriority){
        if(item.priorityStatus=="done"){
          this.donePrio.push(item);
        }
        if(item.priorityStatus=="not started"){
          this.notStarted.push(item);
        }
        if(item.priorityStatus=="in progress"){
          this,this.activePrio.push(item);
        }

      }
      console.log("Done Priorities: "+this.donePrio.length);
      console.log("Active Priorities: "+this.activePrio.length);
      console.log("Not started Priorities: "+ this.notStarted.length);
    
  }

  getDone(){
    if(this.condition==true){
      console.log("pumasok sa conditon")
      if(this.showPriority.priorityStatus=="done"){
        this.done=false;
      }
      else{
        this.done=true;
      }
    }
  }

}

