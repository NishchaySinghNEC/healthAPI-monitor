import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { AddEditFormComponent } from 'src/app/add-edit-form/add-edit-form.component';
import { ApiCallsService } from 'src/app/api-calls.service';
import { ShowMoreDialogComponent } from 'src/app/show-more-dialog/show-more-dialog.component';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})

export class UiComponent implements OnInit {

  elementData!: any
  @Input() page!: string 

  constructor(private apiSrv: ApiCallsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.apiSrv.getDataList(this.page).subscribe({
      next: (data: any)=> {
        this.elementData = data.map((object: any) => {
          return {...object, info: '', status: 'FAIL'}
        });
      },
      complete: () => this.refreshStatus() 
    })
  }

  private checkStatus(i:number) {
    this.apiSrv.apiCheckCall(this.elementData[i].url).subscribe({
      complete: () => {
        this.elementData[i].status = 'SUCCESS'; 
        this.elementData[i].info= 'working properly'
      },
      error: (err) => this.handleError(err,i)
    })    
  }

  private handleError(error: HttpErrorResponse,i:number) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      this.elementData[i].status = 'FAIL'
      this.elementData[i].info =  `a client side or network error occurred`+"  >>>>> error is " + error.error.type
    }
    else if (error.status===200) {
      //if url not present
      if(this.elementData[i].url===''){this.elementData[i].status = 'NO URL PRESENT'; this.elementData[i].info= 'PLEASE ADD API URL'}
      else this.elementData[i].status = 'SUCCESS'
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
    }
  }

  delete(id: string){
    this.apiSrv.delete(id).subscribe({
      complete: () => this.getData()
    })
  }
  
  openDialog(elementData: any){
    const dialofRef = this.dialog.open(AddEditFormComponent,{
      data: [elementData, this.elementData, this.page],
      disableClose: true
    });
    dialofRef.afterClosed().subscribe(result=>{
      if(result[0] === 'add'){
        this.apiSrv.postLog(result[1]).subscribe({
          complete: () => this.getData()
        });
      }
      else if(result[0] === 'edit'){
        this.apiSrv.updateLog(result[1]).subscribe({
          complete: () => this.getData()
        });
      }
    })
  }

}
