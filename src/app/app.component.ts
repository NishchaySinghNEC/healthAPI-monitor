import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'healthAPI-monitor';
  application = ['Provider portal', 'Public portal', 'Gateway', 'Admin Portal', 'OSRM', 'Keycloak', 'UI provider', 'UI public', 'UI admin'];
  dataColumn = ['ID', 'Start date', 'End date', 'Time', 'URI', 'Status', 'Request Body', 'Response message', 'Details'];
}
