import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SortTypes } from '../../models/sort-type';
import { ProductSelectorService } from '../../store/selectors/product-selector.service';
import { ProductDispatcherService } from '../../store/dispatcher/product-dispatcher.service';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.scss']
})
export class ProductSortComponent implements OnInit {

  sortFormCont;
  sortByTypes = [...SortTypes];

  constructor(private productSelector: ProductSelectorService, private productDispatcher: ProductDispatcherService) { }

  ngOnInit() {
  }
  openedChange(isOpen) {
    if (!isOpen) {
      debugger
      let viewValue = '';
      if (this.sortFormCont)
        viewValue = this.sortByTypes.find(item => item.value === this.sortFormCont).viewValue;
      this.productSelector.getProductsSortBy().subscribe(value => {
        debugger
        if (this.sortFormCont !== value.value) {
          this.productDispatcher.dispatchProductSortBy({
            value: this.sortFormCont,
            viewValue: viewValue
          });
        }
      })
    }
  }
}
