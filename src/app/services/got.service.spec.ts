import { TestBed } from '@angular/core/testing';

import { GotService } from './got.service';

describe('GotserviceService', () => {
  let service: GotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
