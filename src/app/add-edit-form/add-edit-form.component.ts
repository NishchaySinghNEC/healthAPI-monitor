import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ENDPOINTS } from '../url-constants';

export interface ApplicationFormData{
  applicationName: string;
  url: string;
}

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

  constructor(public dialogRef: MatDialogRef<AddEditFormComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder) {}    

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    if(this.data[0]){
    this.applicationDetail = this.fb.group({
      applicationName:[this.data[0].applicationName,[Validators.required]],
      url: [this.data[0].url, [Validators.required]]
    })}
    else {
      this.applicationDetail = this.fb.group({
        applicationName:['',[Validators.required]],
        url: ['', [Validators.required]]
      })
    }
  }

  

  onSubmit() {
    if(this.applicationDetail.valid){
      const formData = this.applicationDetail.value 
      // const appName = this.data[0].applicationName
      let endpointData = [...this.data[1]]
      if(this.data[0]){
        const appName = this.data[0].applicationName
      const ind = endpointData.findIndex(ep=>ep.applicationName==appName)
      endpointData[ind] = {...endpointData[ind],...formData}}
      else{
        endpointData.push(formData)
      }
      console.log('close',endpointData)
      localStorage.setItem('ENDPOINTS', JSON.stringify(endpointData))
      this.dialogRef.close(endpointData)
    }
  }
}
