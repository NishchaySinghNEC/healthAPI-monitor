import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LogListComponent } from './log-list/log-list.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from './material/material.module';
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
    AddEditFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
