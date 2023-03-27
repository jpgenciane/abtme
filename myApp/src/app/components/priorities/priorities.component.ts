import { Component , OnInit, ViewEncapsulation} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PrioritiesComponent implements OnInit{
  constructor(public dialog: MatDialog){}
  ngOnInit(): void {
    
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'40%',
      height:'auto',
    });
  }
}

