import { TestBed } from '@angular/core/testing';

import { RemeraService } from './remera.service';

describe('RemeraService', () => {
  let service: RemeraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemeraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
