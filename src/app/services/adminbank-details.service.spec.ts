import { TestBed } from '@angular/core/testing';

import { AdminbankDetailsService } from './adminbank-details.service';

describe('AdminbankDetailsService', () => {
  let service: AdminbankDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminbankDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
