import { ProductSelectorService } from './../store/selectors/product-selector.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductDispatcherService } from '../store/dispatcher/product-dispatcher.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  //#region Members
  private products$: Observable<Array<Product>>;
  private totalSize$: Observable<number>;

  private pageSize = 10;
  private currentPage = 0;
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
          this.productDispatcher.dispatchLoadShownEntities(this.currentPage, this.pageSize);
          this.products$ = this.productSelector.getProductsPerPage();
          this.totalSize$ = this.productSelector.getProductsCount();
        } else { this.spinner.show(); };
      });
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.productDispatcher.dispatchLoadShownEntities(this.currentPage, this.pageSize);
  }
}
