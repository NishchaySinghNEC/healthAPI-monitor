import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LogListComponent } from './log-list/log-list.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TabsComponent } from './tabs/tabs.component';
import { AppRoutingModule } from './app-routing.module';
import { DatePipe } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { DetaildiaComponent } from './detaildia/detaildia.component';
import { FormsModule } from '@angular/forms';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShowMoreDialogComponent } from './show-more-dialog/show-more-dialog.component';
import { FooterComponent } from './footer/footer.component';
import { SystemComponent } from './application-list/system/system.component';
import { UiComponent } from './application-list/ui/ui.component';
import { ServicesComponent } from './application-list/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    LogListComponent,
    ApplicationListComponent,
    NavbarComponent,
    ErrorpageComponent,
    TabsComponent,
    DetaildiaComponent,
   
    AddEditFormComponent,
         ShowMoreDialogComponent,
         FooterComponent,
         SystemComponent,
         UiComponent,
         ServicesComponent
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
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
