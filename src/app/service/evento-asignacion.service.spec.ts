import { TestBed } from '@angular/core/testing';

import { EventoAsignacionService } from './evento-asignacion.service';

describe('EventoAsignacionService', () => {
  let service: EventoAsignacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoAsignacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
