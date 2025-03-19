import { TestBed } from '@angular/core/testing';

import { DorsalService } from './dorsal.service';

describe('DorsalService', () => {
  let service: DorsalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DorsalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
