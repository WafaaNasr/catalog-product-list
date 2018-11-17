import { TestBed, inject } from '@angular/core/testing';

import { ProductDispatcherService } from './product-dispatcher.service';

describe('ProductDispatcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductDispatcherService]
    });
  });

  it('should be created', inject([ProductDispatcherService], (service: ProductDispatcherService) => {
    expect(service).toBeTruthy();
  }));
});
