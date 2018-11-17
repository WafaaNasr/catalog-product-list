import { ProductEffectsService } from './store/effects/product-effects.service';
import { EffectsModule } from '@ngrx/effects';
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './container/product.component';
import { StoreModule } from "@ngrx/store";
import { productReducer } from './store/product-reducer';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './services/product.service';


//export const SERVER_URL = new InjectionToken<string>('SERVERURL');


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffectsService])
  ],
  declarations: [ProductItemComponent, ProductListComponent, ProductComponent],
  providers: [{ provide: 'SERVER_URL', useValue: 'http://localhost:3000' },
    ProductService],
  exports: [ProductComponent]
})
export class ProductModule { }
