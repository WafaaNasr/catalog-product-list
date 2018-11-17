import { ProductState } from './../product/store/product-state';
import { RouterReducerState } from '@ngrx/router-store';


export interface AppState {
    products: ProductState
    routerState: RouterReducerState;
}
