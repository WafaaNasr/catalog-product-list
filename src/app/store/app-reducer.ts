import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app-state";
import { routerReducer } from "@ngrx/router-store";
import { productReducer } from "../product/store/product-reducer";

export const appReducer: ActionReducerMap<AppState> = {
    products: productReducer,
    routerState: routerReducer
};