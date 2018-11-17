
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatButtonModule, MatIconModule
} from '@angular/material';

@NgModule({
  imports: [MatCardModule, BrowserAnimationsModule, MatButtonModule, MatIconModule,],
  exports: [MatCardModule, BrowserAnimationsModule, MatButtonModule, MatIconModule,],
})
export class MaterialModule { }
