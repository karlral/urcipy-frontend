import { TestBed } from '@angular/core/testing';

import { ParticipubService } from './participub.service';

describe('ParticipubService', () => {
  let service: ParticipubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
