import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiCallsService } from '../api-calls.service';
import { ENDPOINTS } from '../url-constants';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {

  applicationDetail!: FormGroup

  constructor(public dialogRef: MatDialogRef<AddEditFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder, public apiSrv: ApiCallsService) {}    

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    if(this.data[0]){      
    this.applicationDetail = this.fb.group({
      portalName:[this.data[0].portalName,[Validators.required]],
      url: [this.data[0].url, [Validators.required]]
    })}
    else {
      this.applicationDetail = this.fb.group({
        portalName:['',[Validators.required]],
        url: ['', [Validators.required]]
      })
    }
  }

  onSubmit() {
    if(this.applicationDetail.valid){
      const formData = this.applicationDetail.value 
      const newData = {...this.data[0], ...formData}
      if(this.data[0]){
        this.dialogRef.close(['edit', newData]);
      }
      else{
        this.dialogRef.close(['add', {...formData, component: this.data[2]}]);
      }
    }
  }
}
