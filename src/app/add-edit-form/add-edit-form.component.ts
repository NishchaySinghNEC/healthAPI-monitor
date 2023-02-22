import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class Address {
  constructor(
    public firstname?: string,
    public lastname?: string,
    public address?: string,
    public city?: string,
    public state?: string,
    public postalcode?: string
  ) {}
}

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {

  applicationDetail!: FormGroup

  constructor( public dialogRef: MatDialogRef<AddEditFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder) { 
      this.applicationDetail = this.fb.group({
        applicationName: ['', [Validators.required]],
        link: ['', [Validators.required]]
      })
    }    

  ngOnInit(): void {
  }

  onSubmit() {
    alert('Thanks for submitting! Data: ');
  }

}
