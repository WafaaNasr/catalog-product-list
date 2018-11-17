import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './container/product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductItemComponent, ProductListComponent, ProductComponent]
})
export class ProductModule { }
