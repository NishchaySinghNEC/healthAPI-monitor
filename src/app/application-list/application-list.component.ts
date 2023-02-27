import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { AddEditFormComponent } from '../add-edit-form/add-edit-form.component';
import { ApiCallsService } from '../api-calls.service';
import { ShowMoreDialogComponent } from '../show-more-dialog/show-more-dialog.component';
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

  elementData:any[]  = localStorage.getItem('ENDPOINTS')?JSON.parse(localStorage.getItem('ENDPOINTS')||'{}'):[...ENDPOINTS];

  constructor(private apiSrv: ApiCallsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    for(let i = 0; i<this.elementData.length; i++){
      this.checkStatus(i)
      // this.apiSrv.apiCheckCall(this.elementData[i].url).pipe(catchError(err=>this.handleError(err,i))).subscribe(data=> {this.elementData[i].status = 'SUCCESS';this.elementData[i].info='working properly'})  
    }
  }

  private checkStatus(i:number) {
    this.apiSrv.apiCheckCall(this.elementData[i].url).pipe(catchError(err=>this.handleError(err,i))).subscribe(data=> {this.elementData[i].status = 'SUCCESS';this.elementData[i].info='working properly'})    
  }
  private handleError(error: HttpErrorResponse,i:number) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      this.elementData[i].info =  `a client side or network error occured`+"  >>>>>error is " + error.error.type
    }
    else if (error.status===200) {
      //if url not present
      if(this.elementData[i].url===''){this.elementData[i].status = 'NO URL PRESENT'; this.elementData[i].info='PLEASE ADD API URL'}
      else this.elementData[i].status = 'SUCCESS'
      //console.log(error.error)
    }
     else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
     
      this.elementData[i].info=  `Backend returned code ${error.status}, body was:  ${error.error}`;
      this.elementData[i].status = 'FAIL'
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(''));
  }
  
  textColor(statusCode: string){
    return statusCode === 'SUCCESS' ? 'primary-green' : 'warn'
  }

  showMoreInfo(element:string) {
    this.dialog.open(ShowMoreDialogComponent,{
      data: element,
    });
  }
  refreshStatus(){
    for(let i = 0; i<this.elementData.length; i++){
      this.checkStatus(i)
      // this.apiSrv.apiCheckCall(this.elementData[i].url).pipe(catchError(err=>this.handleError(err,i))).subscribe(data=> {this.elementData[i].status = 'SUCCESS';this.elementData[i].info='working properly'})  
    }
  }
  openDialog(elementData: any){
    const dialofRef = this.dialog.open(AddEditFormComponent,{
      data: [elementData,this.elementData],
      disableClose: true
    });
    dialofRef.afterClosed().subscribe(result=>{
      if(result){
        this.elementData = result;
        this.refreshStatus()
      }
    })
  }
}
