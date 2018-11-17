import { ProductState, setInitailBaseState } from "./product-state";
import { ProductListActions } from "./actions/product-actions";

export function productReducer(
    state: ProductState = setInitailBaseState(),
    action: ProductListActions
): ProductState { return state }