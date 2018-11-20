import { ProductDispatcherService } from './../../store/dispatcher/product-dispatcher.service';
import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatSelect } from '@angular/material';
import { ProductsFilter } from '../../models/products-filters';
import { ProductSelectorService } from '../../store/selectors/product-selector.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFilterComponent implements OnInit, OnDestroy {

  private panelOpenState = false;
  private brandsFormCon = new FormControl();
  private productTypesFormCon = new FormControl();
  private selectedBrands: Array<string> = [];
  private selectedTypes: Array<string> = [];
  private productsFilter: ProductsFilter;
  private subscription: Subscription;

  @Input('brands') brands$: Array<string>;
  @Input('productTypes') productTypes$: Array<string>;

  constructor(private productSelector: ProductSelectorService, private productDispatcher: ProductDispatcherService) { }


  ngOnInit(): void {
    this.subscription = this.productSelector.getProductsFilters().subscribe(value => this.productsFilter = value);
  }

  brandOpenedChange(isOpen) {
    if (!isOpen) {
      if (this.brandsFormCon.value) {
        this.productDispatcher.dispatchFilter({ brand: this.brandsFormCon.value, type: [...this.productsFilter.type] });
      }
    }
  }
  typeOpenedChange(isOpen) {
    if (!isOpen) {
      if (this.productTypesFormCon != null) {
        this.productDispatcher.dispatchFilter({ brand: [...this.productsFilter.brand], type: this.productTypesFormCon.value });
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
