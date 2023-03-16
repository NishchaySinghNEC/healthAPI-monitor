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

export class ApplicationListComponent {

}
