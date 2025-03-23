import { TestBed } from '@angular/core/testing';

import { TimeGuard } from './time.guard';

describe('TimioGuard', () => {
  let guard: TimeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TimeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
