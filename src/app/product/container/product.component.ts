import { ProductSelectorService } from './../store/selectors/product-selector.service';
import { Component, OnInit } from '@angular/core';
import { ProductDispatcherService } from '../store/dispatcher/product-dispatcher.service';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private products$: Observable<Array<Product>>;

  constructor(private productDispatcher: ProductDispatcherService, private productSelector: ProductSelectorService) { }

  ngOnInit() {
    this.productDispatcher.dispatchLoadAll();
    this.products$ = this.productSelector.getProducts()
  }

}
