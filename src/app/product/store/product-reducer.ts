import { ProductState, setInitailBaseState } from "./product-state";
import { ProductListActions } from "./actions/product-actions";
import { ProductListActionTypes } from "./actions/product-actions-types";
import { getEntitesPerPage, pluck, filter, dynamicSort } from "src/app/core/store/utility-functions";

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
                filteredEntities: [...newEntities],
                productsFilter: { ...state.productsFilter },
                productBrands: pluck('brand', [...newEntities]),
                productTypes: pluck('type', [...newEntities]),
                loading: false,
                error: undefined,
                loaded: true,
                hasError: false,
                currentPage: state.currentPage,
                pageSize: state.pageSize,
                normalizedEntities: null,
                productsSortBy: { ...state.productsSortBy }
            };
        }
        case ProductListActionTypes.ProductListLoadPerPage: {
            const allEnt = [...state.filteredEntities];
            const showEntities = getEntitesPerPage(allEnt, action.payload.pageIndex, action.payload.pageSize);
            return {
                ...state,
                entities: [...state.entities],
                entitiesCount: state.filteredEntities.length,
                shownEntities: [...showEntities],
                productsFilter: { ...state.productsFilter },
                filteredEntities: [...state.filteredEntities],
                productBrands: [...state.productBrands],
                productTypes: [...state.productTypes],
                loading: false,
                error: undefined,
                loaded: true,
                hasError: false,
                currentPage: action.payload.pageIndex,
                pageSize: action.payload.pageSize,
                normalizedEntities: null,
                productsSortBy: { ...state.productsSortBy }
            };
        }
        case ProductListActionTypes.ProductListFilter: {
            const allEnt = [...state.entities];
            let filteredEntities = filter(allEnt, 'brand', action.payload || state.productsFilter.brand);
            filteredEntities = filter([...filteredEntities], 'type', action.payload || state.productsFilter.type);
            if (state.productsSortBy && state.productsSortBy['value'])
                filteredEntities = [...filteredEntities.sort(dynamicSort(state.productsSortBy['value']))];
                debugger;
            const showEntities = getEntitesPerPage([...filteredEntities], state.currentPage, state.pageSize);

            return {
                ...state,
                entities: [...state.entities],
                entitiesCount: filteredEntities.length,
                shownEntities: [...showEntities],
                filteredEntities: [...filteredEntities],
                productsFilter: { ...action.payload },
                productBrands: [...state.productBrands],
                productTypes: [...state.productTypes],
                loading: false,
                error: undefined,
                loaded: true,
                hasError: false,
                normalizedEntities: null,
                productsSortBy: { ...state.productsSortBy }
            };
        }
        case ProductListActionTypes.ProductListSort: {
            const allEnt = [...state.filteredEntities];
            let sortedEntities = [...allEnt.sort(dynamicSort(action.payload['value']))];
            const showEntities = getEntitesPerPage([...sortedEntities], state.currentPage, state.pageSize);
            return {
                ...state,
                entities: [...state.entities],
                entitiesCount: sortedEntities.length,
                shownEntities: [...showEntities],
                filteredEntities: sortedEntities,
                productsFilter: { ...state.productsFilter },
                productBrands: [...state.productBrands],
                productTypes: [...state.productTypes],
                loading: false,
                error: undefined,
                loaded: true,
                hasError: false,
                normalizedEntities: null,
                productsSortBy: { ...action.payload }
            };
        }
        case ProductListActionTypes.ProductListError: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                hasError: true,
                entities: [],
                filteredEntities: [],
                currentPage: state.currentPage,
                pageSize: state.pageSize,
                entitiesCount: 0,
                shownEntities: [],
                productsFilter: null,
                error: action.payload,
                normalizedEntities: null,
                productsSortBy: null
            });
        }
    }

    return state
}