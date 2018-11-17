import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input('productList') productList$: Observable<Array<Product>>;

  constructor() { }

  ngOnInit() {
  }

}
