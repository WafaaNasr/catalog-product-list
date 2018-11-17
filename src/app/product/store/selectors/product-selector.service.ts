import { ProductState } from './../product-state';
import { Product } from './../../models/product';
import { Injectable } from '@angular/core';
import { StoreSelectors } from 'src/app/core/store/app-store-selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSelectorService extends StoreSelectors<Product>{

  //#region Members
  private featureSelector;
  private productsSelector;
  private productsFilter;
  //#endregion


  constructor(store: Store<ProductState>) {
    super(store);
    this.featureSelector = this.createSelectorForFeature('products');
    this.productsFilter = this.getProperty(this.featureSelector, 'productsFilter');
    this.productsSelector = this.getEntities(this.featureSelector) as Observable<Array<Product>>;
  }


  getProducts(): Observable<Array<Product>> {
    return this.productsSelector;
  }
}
