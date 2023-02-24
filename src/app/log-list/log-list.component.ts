import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DetaildiaComponent } from '../detaildia/detaildia.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfig } from '@angular/cdk/dialog';
import { ENDPOINTS } from 'src/app/url-constants'
import { FormControl, FormGroup } from '@angular/forms';


export interface TableElement {
  id: string;
  startDate: string;
  endDate: string;
  time: string;
  uri: string;
  status: string;
  requestBody: string;
  responseMessage: string;
  details: string;
}

const ELEMENT_DATA: TableElement[] = [
  { id: '1',
    startDate: '11-11-2011',
    endDate: '11-11-2011',
    time: '11:11',
    uri: '121212',
    status: '200',
    requestBody: 'request',
    responseMessage: 'hello',
    details: 'details'
  },
  { id: '2',
    startDate: '11-11-2011',
    endDate: '11-11-2011',
    time: '11:11',
    uri: '121212',
    status: '400',
    requestBody: 'request',
    responseMessage: 'hello',
    details: 'details'
  },
  { id: '2',
    startDate: '11-11-2011',
    endDate: '11-11-2011',
    time: '11:11',
    uri: '121212',
    status: '400',
    requestBody: 'request',
    responseMessage: 'hello',
    details: 'details'
  },
  { id: '2',
    startDate: '11-11-2011',
    endDate: '11-11-2011',
    time: '11:11',
    uri: '121212',
    status: '400',
    requestBody: 'request',
    responseMessage: 'hello',
    details: 'details'
  },
  { id: '2',
    startDate: '11-11-2011',
    endDate: '11-11-2011',
    time: '11:11',
    uri: '121212',
    status: '400',
    requestBody: 'request',
    responseMessage: 'hello',
    details: 'details'
  },
  { id: '2',
    startDate: '11-11-2011',
    endDate: '11-11-2011',
    time: '11:11',
    uri: '121212',
    status: '400',
    requestBody: 'request',
    responseMessage: 'hello',
    details: 'details'
  },
  { id: '2',
    startDate: '11-11-2011',
    endDate: '11-11-2011',
    time: '11:11',
    uri: '121212',
    status: '400',
    requestBody: 'request',
    responseMessage: 'hello',
    details: 'details'
  },
];

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements AfterViewInit {
  dialogRef: any;
  
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(public dialog: MatDialog) { }

  application = Object.keys(ENDPOINTS)
  displayedColumns: string[] = ['id', 'startDate', 'endDate', 'time', 'uri', 'status', 'requestBody', 'responseMessage', 'details'];
  dataSource = new MatTableDataSource<TableElement>(ELEMENT_DATA);

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

  

  
}
