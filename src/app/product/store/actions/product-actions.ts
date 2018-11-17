import { Action } from "@ngrx/store";
import { ProductListActionTypes } from "./product-actions-types";
import { Product } from "../../models/product";


export class ProductListLoadAll implements Action {
    type: ProductListActionTypes.ProductListLoadAll;
}

export class ProductListLoadAllSucess implements Action {
    type: ProductListActionTypes.ProductListLoadAllSuccess;
    constructor(private payload: Array<Product>) { }
}



export type ProductListActions =
    ProductListLoadAll
    | ProductListLoadAllSucess;