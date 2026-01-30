import { TestBed } from '@angular/core/testing';

import { EventoCategoriaService } from './evento-categoria.service';

describe('EventoCategoriaService', () => {
  let service: EventoCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
