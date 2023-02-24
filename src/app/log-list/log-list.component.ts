import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DetaildiaComponent } from '../detaildia/detaildia.component';
import { MatDialog } from '@angular/material/dialog';
import { ENDPOINTS } from 'src/app/url-constants'
import { ApiCallsService } from '../api-calls.service';
import { LogInterface } from '../log-interface';
import { LogFormInterface } from '../log-form-interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit, AfterViewInit {
  dialogRef: any;
  ELEMENT_DATA!: LogInterface[];
  requestMethodList: string[] = ['GET', 'POST', 'PUT', 'DELETE'];
  logDetails!: FormGroup;

  constructor(public dialog: MatDialog, private callLogService: ApiCallsService ,private fb: FormBuilder) { }

  get startDate(){
    return this.logDetails.get('range')?.get('start')
  }

  get endDate(){
    return this.logDetails.get('range')?.get('end')
  }

  ngOnInit() {
    this.logDetails = this.fb.group({
      limit: [null],
      range: this.fb.group({
        startDate: [null],
        endDate: [null]
      }),
      requestMethod: [null],
      responseStatus: [null],
    })
  }

  application = Object.keys(ENDPOINTS)
  displayedColumns: string[] = ['id', 'startDate', 'endDate', 'time', 'uri', 'status', 'responseMessage', 'details'];
  dataSource = new MatTableDataSource<LogInterface>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog() {
    this.dialogRef=this.dialog.open(DetaildiaComponent,{
      height: '70%',
      width: '60%',
      
    });
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  appendUrlParams(): string{
    let url = 'http://localhost:9000/api-access-log?'
    let formData: LogFormInterface = this.logDetails.value
    console.log(formData);
    
    const paramsList = []
    const limit = formData.limit ? formData.limit : 100;
    if(limit){
      paramsList.push(`limit=${limit}`);
    }
    if(formData.requestMethod){
      paramsList.push(`requestMethod=${formData.requestMethod}`);
    }
    if(formData.responseStatus){
      paramsList.push(`responseStatus=${formData.responseStatus}`);
    }
    if(formData.range.startDate){
      paramsList.push(`startDate=${formData.range.startDate}`);
    }
    if(formData.range.endDate){
      paramsList.push(`endDate=${formData.range.endDate}`);
    }
    console.log(url + paramsList.join('&'));
    
    return url + paramsList.join('&')
  }

  getLogs(){
    const url: string = this.appendUrlParams()
    this.callLogService.callLog(url).subscribe(data => this.dataSource.data = data)    
  } 
}
