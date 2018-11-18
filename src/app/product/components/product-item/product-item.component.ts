import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input('product') product: Product;

  constructor() { }

  ngOnInit() {
  }
  getItemRating(rating) {
    return rating / 20;
  }
  getItemName(name: string, brand: string) {
    var nameOnly = name.split(brand)[0];
    return nameOnly;
  }
}
