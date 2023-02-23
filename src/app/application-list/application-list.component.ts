import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditFormComponent } from '../add-edit-form/add-edit-form.component';
import { ApiCallsService } from '../api-calls.service';
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

  constructor(private apiSrv: ApiCallsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.apiSrv.apiCheckCall(ENDPOINTS.Provider_Portal.url).subscribe(data=>console.log(data),
    err=>console.log(err)
    )
  }

  textColor(statusCode: number){
    return statusCode === 200 ? 'primary-green' : 'warn'
  }

  openDialog(elementData: string){
    const dialofRef = this.dialog.open(AddEditFormComponent,{
      data: elementData,
      disableClose: true
    });
    dialofRef.afterClosed().subscribe(result=>{
      if(result){
        this.elementData = Object.keys(result)
      }
    })
  }
}
