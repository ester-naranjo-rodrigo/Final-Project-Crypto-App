import { TestBed } from '@angular/core/testing';

import { FinancialModelingPrepService } from './financial-modeling-prep.service';

describe('FinancialModelingPrepService', () => {
  let service: FinancialModelingPrepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialModelingPrepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
