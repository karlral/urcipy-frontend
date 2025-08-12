import { TestBed } from '@angular/core/testing';

import { TimepagosGuard } from './timepagos.guard';

describe('TimepagosGuard', () => {
  let guard: TimepagosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TimepagosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
