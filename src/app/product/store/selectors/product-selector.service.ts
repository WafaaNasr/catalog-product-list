import { SortType } from './../../models/sort-type';
import { ProductState } from './../product-state';
import { Product } from './../../models/product';
import { Injectable } from '@angular/core';
import { StoreSelectors } from 'src/app/core/store/app-store-selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsFilter } from '../../models/products-filters';

@Injectable({
  providedIn: 'root'
})
export class ProductSelectorService extends StoreSelectors<Product>{

  //#region Members
  private productsSelector;
  private productsFilter;
  private shownProducts;
  private productsCount;
  private productsBrands;
  private productsTypes;
  private productsSortBy;
  private showNoFiltItems;
  //#endregion

  // Proberties
  public featureSelector;

  constructor(store: Store<ProductState>) {
    super(store);
    this.featureSelector = this.createSelectorForFeature('products');
    this.productsFilter = this.getProperty(this.featureSelector, 'productsFilter');
    this.productsSelector = this.getEntities(this.featureSelector) as Observable<Array<Product>>;
    this.shownProducts = this.getProperty(this.featureSelector, 'shownEntities');
    this.productsCount = this.getProperty(this.featureSelector, 'entitiesCount');
    this.productsBrands = this.getProperty(this.featureSelector, 'productBrands');
    this.productsTypes = this.getProperty(this.featureSelector, 'productTypes');
    this.productsSortBy = this.getProperty(this.featureSelector, 'productsSortBy');
    this.showNoFiltItems = this.getProperty(this.featureSelector, 'showNoFiltItems');
  }


  getAllProducts(): Observable<Array<Product>> {
    return this.productsSelector;
  }
  getProductsPerPage(): Observable<Array<Product>> {
    return this.shownProducts;
  }
  getProductsCount(): Observable<number> {
    return this.productsCount;
  }
  getProductsBrands(): Observable<string> {
    return this.productsBrands;
  }
  getProductsTypes(): Observable<string> {
    return this.productsTypes;
  }

  getProductsFilters(): Observable<ProductsFilter> {
    return this.productsFilter;
  }

  getProductsSortBy(): Observable<SortType> {
    return this.productsSortBy;
  }
  
  getShowNoFiltItems(): Observable<boolean> {
    return this.showNoFiltItems;
  }
}
