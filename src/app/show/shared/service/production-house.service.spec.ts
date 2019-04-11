import { TestBed } from '@angular/core/testing';

import { ProductionHouseService } from './production-house.service';

describe('ProductionHouseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductionHouseService = TestBed.get(ProductionHouseService);
    expect(service).toBeTruthy();
  });
});
