import { SortType } from './../../models/sort-type';
import { ProductsFilter } from './../../models/products-filters';
import { ProductListLoadAll, ProductListLoadPerPage, ProductListFilter, ProductListSort } from '../actions/product-actions';
import { Product } from '../../models/product';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ProductDispatcherService {
  constructor(private store: Store<Product>) { }

  public dispatchLoadAll() {
    this.store.dispatch(new ProductListLoadAll());
  }
  public dispatchLoadShownEntities(pageIndex: number, pageSize: number) {
    this.store.dispatch(new ProductListLoadPerPage({ pageIndex: pageIndex, pageSize: pageSize }));
  }
  public dispatchFilter(filter: ProductsFilter) {
    this.store.dispatch(new ProductListFilter(filter));
  }

  public dispatchProductSortBy(SortBy: SortType) {
    this.store.dispatch(new ProductListSort(SortBy));
  }

}
