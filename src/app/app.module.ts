import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LogListComponent } from './log-list/log-list.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

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
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule, 
    MatTableModule,
    MatTabsModule,
    AppRoutingModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
