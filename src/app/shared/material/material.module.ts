
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatButtonModule, MatIconModule, MatPaginatorModule
} from '@angular/material';
@NgModule({
  imports: [MatCardModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatPaginatorModule],
  exports: [MatCardModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatPaginatorModule],
})
export class MaterialModule { }
