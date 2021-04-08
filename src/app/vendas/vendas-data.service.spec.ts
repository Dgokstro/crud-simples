import { TestBed } from '@angular/core/testing';

import { VendasDataService } from './vendas-data.service';

describe('VendasDataService', () => {
  let service: VendasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
