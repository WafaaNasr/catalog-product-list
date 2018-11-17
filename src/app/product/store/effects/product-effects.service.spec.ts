import { TestBed, inject } from '@angular/core/testing';

import { ProductEffectsService } from './product-effects.service';

describe('ProductEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductEffectsService]
    });
  });

  it('should be created', inject([ProductEffectsService], (service: ProductEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
