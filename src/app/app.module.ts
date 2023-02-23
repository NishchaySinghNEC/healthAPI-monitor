import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import {Component} from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LogListComponent } from './log-list/log-list.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TabsComponent } from './tabs/tabs.component';
import { MaterialModule } from './material/material.module';
import { DetaildiaComponent } from './detaildia/detaildia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogListComponent,
    ApplicationListComponent,
    NavbarComponent,
    ErrorpageComponent,
    TabsComponent,
    DetaildiaComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
