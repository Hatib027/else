import { TestBed } from '@angular/core/testing';

import { VerifyotpGuard } from './verifyotp.guard';

describe('VerifyotpGuard', () => {
  let guard: VerifyotpGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerifyotpGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
