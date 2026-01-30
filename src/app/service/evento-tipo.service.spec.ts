import { TestBed } from '@angular/core/testing';

import { EventoTipoService } from './evento-tipo.service';

describe('EventoTipoService', () => {
  let service: EventoTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
