import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LogListComponent } from './log-list/log-list.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TabsComponent } from './tabs/tabs.component';

import { MaterialModule } from './material/material.module';
@NgModule({
  declarations: [
    AppComponent,
    LogListComponent,
    ApplicationListComponent,
    NavbarComponent,
    ErrorpageComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
