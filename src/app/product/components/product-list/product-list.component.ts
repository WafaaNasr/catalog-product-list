import { Product } from './../../models/product';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {

  @Input('productList') productList$: Observable<Array<Product>>;
  @Input('loaded') loaded: Boolean;
  constructor() { }

  ngOnInit() {
  }

}
