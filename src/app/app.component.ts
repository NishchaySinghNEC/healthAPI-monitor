import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  position: number;
  status: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
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



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'healthAPI-monitor';

  displayedColumns: string[] = ['position', 'name', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  application = ['Provider portal', 'Public portal', 'Gateway', 'Admin Portal', 'OSRM', 'Keycloak', 'UI provider', 'UI public', 'UI admin'];
  dataColumn = ['ID', 'Start date', 'End date', 'Time', 'URI', 'Status', 'Request Body', 'Response message', 'Details'];
}
