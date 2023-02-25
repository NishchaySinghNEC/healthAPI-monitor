import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detaildia',
  templateUrl: './detaildia.component.html',
  styleUrls: ['./detaildia.component.css']
})
export class DetaildiaComponent implements OnInit {

  value: any

  constructor(public dialogRef: MatDialogRef<DetaildiaComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
  }

}
