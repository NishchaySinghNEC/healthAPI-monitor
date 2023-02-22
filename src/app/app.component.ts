import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiCallsService } from './api-calls.service';


export interface PeriodicElement {
  name: string;
  position: number;
  status: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Provider Portal', status:'' },
  {position: 2, name: 'Public Portal', status:''},
  {position: 3, name: 'Gateway', status: ''},
  {position: 4, name: 'Admin Portal', status:''},
  {position: 5, name: 'OSRM', status:'' },
  {position: 6, name: 'Keyclok', status: '' },
  {position: 7, name: 'UI Provider', status: '' },
  {position: 8, name: 'UI Admin', status: '' },
  {position: 9, name: 'UI Public', status: '' }
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'healthAPI-monitor';

  constructor(public apiSrv: ApiCallsService) { }


  displayedColumns: string[] = ['position', 'name', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  application = ['Provider portal', 'Public portal', 'Gateway', 'Admin Portal', 'OSRM', 'Keycloak', 'UI provider', 'UI public', 'UI admin'];
  dataColumn = ['ID', 'Start date', 'End date', 'Time', 'URI', 'Status', 'Request Body', 'Response message', 'Details'];


  ngOnInit() {
    this.apiSrv.providerPortalcall().subscribe(data=>{
      if(data.status == 200){
        ELEMENT_DATA[1].status = 'SUCCESS';
      }
      else{
        ELEMENT_DATA[1].status == 'FAIL';
      }
    });
  }

}
