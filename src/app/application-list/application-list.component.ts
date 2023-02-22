import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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

  displayedColumns: string[] = ['position', 'name', 'status'];

  elementData: TableElement[] = [
    {position: 1, name: 'Provider Portal', status: 200 },
    {position: 2, name: 'Public Portal', status: 200},
    {position: 3, name: 'Gateway', status: 400},
    {position: 4, name: 'Admin Portal', status: 200},
    {position: 5, name: 'OSRM', status: 200 },
    {position: 6, name: 'Keyclok', status: 400 },
    {position: 7, name: 'UI Provider', status: 400 },
    {position: 8, name: 'UI Admin', status: 600 },
    {position: 9, name: 'UI Public', status: 400 }
  ];

  constructor(private apiSrv:ApiCallsService) { }

  ngOnInit(): void {
    this.apiSrv.apiCheckCall(ENDPOINTS.Provider_Portal.url).subscribe(data=>console.log(data),
    err=>console.log(err)
    )
  }

  textColor(statusCode: number){
    return statusCode === 200 ? 'primary-green' : 'warn'
  }

}
