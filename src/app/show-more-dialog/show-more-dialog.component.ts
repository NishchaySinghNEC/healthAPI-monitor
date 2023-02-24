import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-more-dialog',
  templateUrl: './show-more-dialog.component.html',
  styleUrls: ['./show-more-dialog.component.css']
})
export class ShowMoreDialogComponent implements OnInit {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

}
