import { TestBed } from '@angular/core/testing';

import { ResultimioService } from './resultimio.service';

describe('ResultimioService', () => {
  let service: ResultimioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultimioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
