import { ProductSelectorService } from './../store/selectors/product-selector.service';
import { Component, OnInit } from '@angular/core';
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
  private products$: Observable<Array<Product>>;

  constructor(private productDispatcher: ProductDispatcherService,
    private productSelector: ProductSelectorService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.spinLoaderForProducts();
    this.productDispatcher.dispatchLoadAll();
    this.products$ = this.productSelector.getProducts()
  }
  spinLoaderForProducts(): any {
    this.productSelector.getProperty(this.productSelector.featureSelector, 'loaded')
      .subscribe((value) => {
        return value ? this.spinner.hide() : this.spinner.show();
      });
  }

}
