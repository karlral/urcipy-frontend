import { TestBed } from '@angular/core/testing';

import { TipopuntosService } from './tipopuntos.service';

describe('TipopuntosService', () => {
  let service: TipopuntosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipopuntosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
