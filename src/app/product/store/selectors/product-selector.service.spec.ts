import { TestBed, inject } from '@angular/core/testing';

import { ProductSelectorService } from './product-selector.service';

describe('ProductSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSelectorService]
    });
  });

  it('should be created', inject([ProductSelectorService], (service: ProductSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
