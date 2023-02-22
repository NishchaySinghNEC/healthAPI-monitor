import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const materialComponents = [
  MatSlideToggleModule,
  MatFormFieldModule,
  MatInputModule, 
  MatTableModule,
  MatTabsModule,
  MatSortModule,
  MatPaginatorModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
]

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule { }
