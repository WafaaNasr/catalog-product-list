import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {
  @Input('product') product: Product;

  constructor() { }

  ngOnInit() {
  }
  getItemRating(rating) {
    return rating / 20;
  }
  getItemName(name: string, type: string, brand: string) {
    const  nameWithoutBrand = name.split(brand)[1];
    const  nameWithoutType= nameWithoutBrand.split(type)[0];
    return nameWithoutType;
  }
  getProductPrice(price){
    return price/100;
  }
}
