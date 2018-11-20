import { SortType } from './../../models/sort-type';
import { ProductsFilter } from './../../models/products-filters';
import { Action } from "@ngrx/store";
import { ProductListActionTypes } from "./product-actions-types";
import { Product } from "../../models/product";


export class ProductListLoadAll implements Action {
    type = ProductListActionTypes.ProductListLoadAll;
    constructor(public payload?: any) { }
}

export class ProductListLoadAllSucess implements Action {
    type = ProductListActionTypes.ProductListLoadAllSuccess;
    constructor(public payload: Array<Product>) { }
}


export class ProductListError implements Action {
    type = ProductListActionTypes.ProductListError;
    constructor(public payload: any) { }
}

export class ProductListLoadPerPage implements Action {
    type = ProductListActionTypes.ProductListLoadPerPage;
    constructor(public payload: any) { }
}

export class ProductListFilter implements Action {
    type = ProductListActionTypes.ProductListFilter;
    constructor(public payload: ProductsFilter) { }
}

export class ProductListSort implements Action {
    type = ProductListActionTypes.ProductListSort;
    constructor(public payload: SortType) { }
}
export type ProductListActions =
    ProductListLoadAll
    | ProductListLoadAllSucess
    | ProductListError
    | ProductListLoadPerPage
    | ProductListFilter
    | ProductListSort;