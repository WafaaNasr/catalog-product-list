
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule, MatButtonModule, MatIconModule,
  MatPaginatorModule, MatExpansionModule,
  MatInputModule, MatAutocompleteModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [MatCardModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatExpansionModule,
    MatInputModule, MatAutocompleteModule, MatSelectModule],
  exports: [MatCardModule, BrowserAnimationsModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatExpansionModule,
    MatInputModule, MatAutocompleteModule, MatSelectModule]
})
export class MaterialModule { }
