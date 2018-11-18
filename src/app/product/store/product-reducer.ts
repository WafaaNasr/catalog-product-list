import { ProductState, setInitailBaseState } from "./product-state";
import { ProductListActions } from "./actions/product-actions";
import { ProductListActionTypes } from "./actions/product-actions-types";
import { getEntitesPerPage, pluck } from "src/app/core/store/utility-functions";

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
                entitiesCount: newEntities.length,
                shownEntities: [...newEntities],
                productsFilter: { ...state.productsFilter },
                productBrands: pluck('brand', [...newEntities]),
                productTypes: pluck('type', [...newEntities]),
                loading: false,
                error: undefined,
                loaded: true,
                hasError: false,
                normalizedEntities: null,
            };
        }
        case ProductListActionTypes.ProductListLoadPerPage: {
            const allEnt = [...state.entities];
            const showEntities = getEntitesPerPage(allEnt, action.payload.pageIndex, action.payload.pageSize)
            return {
                ...state,
                entities: [...state.entities],
                entitiesCount: state.entities.length,
                shownEntities: [...showEntities],
                productsFilter: { ...state.productsFilter },
                productBrands: [...state.productBrands],
                productTypes: [...state.productTypes],
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
                entitiesCount: 0,
                shownEntities: [],
                productsFilter: null,
                error: action.payload,
                normalizedEntities: null
            });
        }

    }

    return state
}