import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from '../app-routing.module';

const materialComponents = [
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule, 
  MatTableModule,
  MatTabsModule,
  AppRoutingModule,
  MatSortModule,
  MatPaginatorModule
]



@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule { }
