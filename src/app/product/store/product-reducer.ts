import { ProductState, setInitailBaseState } from "./product-state";
import { ProductListActions } from "./actions/product-actions";
import { ProductListActionTypes } from "./actions/product-actions-types";

export function productReducer(
    state: ProductState = setInitailBaseState(),
    action: ProductListActions
): ProductState {

    switch (action.type) {
        case ProductListActionTypes.ProductListLoadAll: {
            return Object.assign({}, state, setInitailBaseState());
        }
        case ProductListActionTypes.ProductListLoadAllSuccess: {
            const newEntities = [...state.entities, ...action.payload];

            return {
                ...state,
                entities: newEntities,
                productsFilter: { ...state.productsFilter },
                loading: false,
                error: undefined,
                loaded: true,
                hasError: false,
                normalizedEntities: null,
            };
        }
        case ProductListActionTypes.ProductListError: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                hasError: true,
                entities: [],
                productsFilter: null,
                error: action.payload,
                normalizedEntities: null
            });
        }
    }

    return state
}