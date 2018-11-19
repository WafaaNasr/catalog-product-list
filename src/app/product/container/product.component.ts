import { ProductListLoadPerPage } from './../store/actions/product-actions';
import { ProductSelectorService } from './../store/selectors/product-selector.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ProductDispatcherService } from '../store/dispatcher/product-dispatcher.service';
import { Product } from '../models/product';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {


  //#region Members
  private products$: Observable<Array<Product>>;
  private totalSize$: Observable<number>;
  private productsBrands$: Observable<string>;
  private productsTypes$: Observable<string>;

  private pageSizeOptions: Array<number> = [5, 10, 20];
  private pageSize$: BehaviorSubject<number>;
  private currentPage: number = 0;
  private showPaginator: boolean = false;
  private subscription: Subscription;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //#endregion

  constructor(private productDispatcher: ProductDispatcherService,
    private productSelector: ProductSelectorService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.pageSize$ = new BehaviorSubject(5);
    this.spinner.show();
    this.spinLoaderForProducts();
    this.productDispatcher.dispatchLoadAll();
  }

  spinLoaderForProducts(): any {
    this.subscription = this.productSelector.getProperty(this.productSelector.featureSelector, 'loaded')
      .subscribe((value) => {
        if (value) {
          this.spinner.hide();
          this.showPaginator = true
          this.productDispatcher.dispatchLoadShownEntities(this.currentPage, this.pageSize$.getValue());
          this.initializeSelectors();
        } else {
          this.spinner.show();
          this.showPaginator = false;
        };
      });
  }
  initializeSelectors() {
    this.products$ = this.productSelector.getProductsPerPage();
    this.totalSize$ = this.productSelector.getProductsCount();
    this.productsBrands$ = this.productSelector.getProductsBrands();
    this.productsTypes$ = this.productSelector.getProductsTypes();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize$.next(e.pageSize);
    this.productDispatcher.dispatchLoadShownEntities(this.currentPage, this.pageSize$.getValue());
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
