import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


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

  application = ['Provider portal', 'Public portal', 'Gateway', 'Admin Portal', 'OSRM', 'Keycloak', 'UI provider', 'UI public', 'UI admin'];
  displayedColumns: string[] = ['id', 'startDate', 'endDate', 'time', 'uri', 'status', 'requestBody', 'responseMessage', 'details'];
  dataSource = new MatTableDataSource<TableElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  constructor() { }

}
