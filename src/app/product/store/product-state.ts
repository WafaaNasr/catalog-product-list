import { Product } from './../models/product';
import { IBaseState } from 'src/app/core/store/ibase-state';
import { ProductsFilter } from '../models/products-filters';
export class ProductState implements IBaseState<Product> {
    loaded: boolean;
    loading: boolean;
    hasError: boolean;
    error: any;
    entities: Product | Product[];
    normalizedEntities?: { [id: number]: Product; };
}

export function setInitailBaseState(): ProductState {
    return Object.assign({}, {
        loaded: false,
        loading: true,
        hasError: false,
        error: null,
        entities: new Array<Product>(),
        productsFilter: { ...new ProductsFilter() },
        normalizedEntities: null
    })
}
