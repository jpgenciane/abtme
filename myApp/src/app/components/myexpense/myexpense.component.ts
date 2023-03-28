import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myexpense',
  templateUrl: './myexpense.component.html',
  styleUrls: ['./myexpense.component.css']
})
export class MyexpenseComponent implements OnInit{
  id = JSON.parse(localStorage.getItem('id') || '{}');
  constructor(){}
  ngOnInit(): void {
    
  }
}
