import { Component , OnInit, ViewEncapsulation} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Priority } from 'src/app/account';
import { PriorityserviceService } from 'src/app/service/priorityservice.service';
import { DialogComponent } from '../dialog/dialog.component';

interface Status {
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
  constructor(public dialog: MatDialog, private service:PriorityserviceService){}
  priority:Priority[];
  showPriority:Priority;
  condition:boolean=false;
  priorityStatus:string;
  ngOnInit(): void {
   this.getAllPriority();
   console.log(this.showPriority);
  }
  
  status: Status[] = [
    {value: 'not started', viewValue: 'Not Started'},
    {value: 'in progress', viewValue: 'In Progress'},
    {value: 'done', viewValue: 'Done'},
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
  }

}

