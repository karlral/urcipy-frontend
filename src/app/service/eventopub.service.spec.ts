import { TestBed } from '@angular/core/testing';

import { EventopubService } from './eventopub.service';

describe('EventopubService', () => {
  let service: EventopubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventopubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
