import { Store } from '@ngrx/store';
import { IBaseState } from './ibase-state';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';



@Injectable()
export class StoreSelectors<T> {
    entites: Observable<T>;

    constructor(protected store: Store<IBaseState<T>>) { }

    //#region Public Selectors of IBaseState

    createSelectorForFeature(featureSelector): MemoizedSelector<IBaseState<T>, IBaseState<T>> {
        return createFeatureSelector<IBaseState<T>>(featureSelector);
    }

    getEntitiesSelector(featureSelector) {
        return createSelector(
            featureSelector,
            (state: IBaseState<T>) => state.entities
        )
    }
    getNormalizedEntities(featureSelector): Observable<{ [id: number]: T }> {
        return this.store.select(createSelector(
            featureSelector,
            (state: IBaseState<T>) => state.normalizedEntities
        ));
    }

    getEntities(featureSelector): Observable<T | Array<T>> {
        return this.store.select(createSelector(
            featureSelector,
            (state: IBaseState<T>) => {
                if (state) return state.entities
            }
        ));
    }

    getProperty(featureSelector, propertyName): Observable<T | Array<T> | any> {
        return this.store.select(createSelector(
            featureSelector,
            (state: IBaseState<T>) => {
                if (state) {    
                    return state[propertyName];
                }
            }
        ));
    }

    getIsLoading(featureSelector): boolean {
        let isLoading: boolean;
        this.store.select(createSelector(
            featureSelector,
            (state: IBaseState<T>) => { isLoading = state.loading }
        ));
        return isLoading;
    }

    getError(featureSelector) {
        let error: any;
        this.store.select(createSelector(
            featureSelector,
            (state: IBaseState<T>) => { error = state.error }
        ));
        return error;
    }

    findById(featureSelector, record: { id }) {
        return this.getEntities(featureSelector)[record['id']];
    }

    //#endregion

}
