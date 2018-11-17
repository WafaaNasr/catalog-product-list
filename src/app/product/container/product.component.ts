import { Component, OnInit } from '@angular/core';
import { ProductDispatcherService } from '../store/product-dispatcher.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productDispatcher: ProductDispatcherService) { }

  ngOnInit() {
    this.productDispatcher.dispatchLoadAll();
  }

}
