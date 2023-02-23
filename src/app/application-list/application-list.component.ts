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

  elementData  = localStorage.getItem('ENDPOINTS')?JSON.parse(localStorage.getItem('ENDPOINTS')||'{}'):[...ENDPOINTS];

  constructor(private apiSrv: ApiCallsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    for(let i = 0; i<ENDPOINTS.length; i++){
      this.apiSrv.apiCheckCall(ENDPOINTS[i].url).subscribe(data=>{
        console.log(data)
        if(data.ok){
          this.elementData[i].status = 'SUCCESS'
        }
        else{
          this.elementData[i].status = 'FAIL'
        }
      }
      )  
    }
  }

  textColor(statusCode: string){
    return statusCode === 'SUCCESS' ? 'primary-green' : 'warn'
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
