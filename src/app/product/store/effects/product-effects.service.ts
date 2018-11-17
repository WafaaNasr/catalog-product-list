import { ProductService } from '../../services/product.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap, map } from "rxjs/operators";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ProductListActionTypes } from '../actions/product-actions-types';
import * as  ProductListActions from "../actions/product-actions";


@Injectable({
  providedIn: 'root'
})
export class ProductEffectsService {

  constructor(private actions$: Actions, private productService: ProductService) { }


  @Effect()
  productListLoadAll$: Observable<Action> = this.actions$.pipe(
    ofType<ProductListActions.ProductListLoadAll>(ProductListActionTypes.ProductListLoadAll)
    , mergeMap(action => this.productService.loadAllProducts().pipe(
      map(data => {
        if (data) {
          return new ProductListActions.ProductListLoadAllSucess(data);
        }
      })
      , catchError(err => of(new ProductListActions.ProductListError(err)))
    )));

}
