import { IBaseState } from 'src/app/core/store/ibase-state';
import { ProductsFilter } from '../models/products-filters';
import { SortType } from '../models/sort-type';
import { Product } from '../models/product';
export class ProductState implements IBaseState<Product> {
    loaded: boolean;
    loading: boolean;
    hasError: boolean;
    error: any;
    entities: Array<Product>;
    productBrands: Array<string>;
    productTypes: Array<string>;
    entitiesCount: number;
    shownEntities: Array<Product>;
    filteredEntities: Array<Product>;
    productsFilter: ProductsFilter;
    showNoFiltItems:Boolean;
    currentPage: number;
    pageSize: number;
    normalizedEntities?: { [id: number]: Product; };
    productsSortBy:SortType
}

export function setInitailBaseState(): ProductState {
    return Object.assign({}, {
        loaded: false,
        loading: true,
        hasError: false,
        error: null,
        entities: new Array<Product>(),
        productBrands: new Array<string>(),
        productTypes: new Array<string>(),
        entitiesCount: 0,
        shownEntities: new Array<Product>(),
        filteredEntities: new Array<Product>(),
        productsFilter: { ...new ProductsFilter() },
        currentPage: 0,
        pageSize: 0,
        normalizedEntities: null,
        productsSortBy:new SortType(),
        showNoFiltItems:false
    })
}
