import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import {Component} from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LogListComponent } from './log-list/log-list.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TabsComponent } from './tabs/tabs.component';
import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material/material.module';
import { DetaildiaComponent } from './detaildia/detaildia.component';
import { FormsModule } from '@angular/forms';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LogListComponent,
    ApplicationListComponent,
    NavbarComponent,
    ErrorpageComponent,
    TabsComponent,
    DetaildiaComponent,
   
    AddEditFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
