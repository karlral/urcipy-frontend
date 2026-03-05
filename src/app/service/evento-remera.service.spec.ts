import { TestBed } from '@angular/core/testing';

import { EventoRemeraService } from './evento-remera.service';

describe('EventoRemeraService', () => {
  let service: EventoRemeraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoRemeraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
