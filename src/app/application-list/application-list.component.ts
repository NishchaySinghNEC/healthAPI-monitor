import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditFormComponent } from '../add-edit-form/add-edit-form.component';
import { ENDPOINTS } from '../url-constants';


export interface TableElement {
  name: string;
  position: number;
  status: number;
}

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})

export class ApplicationListComponent implements OnInit {

  elementData = Object.keys(ENDPOINTS)
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  textColor(statusCode: number){
    return statusCode === 200 ? 'primary-green' : 'warn'
  }

  openDialog(){
    const dialofRef = this.dialog.open(AddEditFormComponent,{
      data: {name: 'nishchay', age:'22'}
    });

    
  }
}
