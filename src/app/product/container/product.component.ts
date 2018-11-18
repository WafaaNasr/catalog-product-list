import { ProductListLoadPerPage } from './../store/actions/product-actions';
import { ProductSelectorService } from './../store/selectors/product-selector.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductDispatcherService } from '../store/dispatcher/product-dispatcher.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //#region Members
  private products$: Observable<Array<Product>>;
  private totalSize$: Observable<number>;

  private pageSizeOptions:Array<number> = [5, 10, 20];
  private pageSize: number = 10;
  private currentPage: number = 0;
  private showPaginator: boolean = false;
  //#endregion

  constructor(private productDispatcher: ProductDispatcherService,
    private productSelector: ProductSelectorService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.spinLoaderForProducts();
    this.productDispatcher.dispatchLoadAll();
  }


  spinLoaderForProducts(): any {
    this.productSelector.getProperty(this.productSelector.featureSelector, 'loaded')
      .subscribe((value) => {
        if (value) {
          this.spinner.hide();
          this.showPaginator = true
          this.productDispatcher.dispatchLoadShownEntities(this.currentPage, this.pageSize);
          this.products$ = this.productSelector.getProductsPerPage();
          this.totalSize$ = this.productSelector.getProductsCount();
        } else {
          this.spinner.show();
          this.showPaginator = false;
        };
      });
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.productDispatcher.dispatchLoadShownEntities(this.currentPage, this.pageSize);
  }
}
