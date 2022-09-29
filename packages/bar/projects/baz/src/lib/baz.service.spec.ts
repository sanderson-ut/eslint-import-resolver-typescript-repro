import { TestBed } from '@angular/core/testing';

import { BazService } from './baz.service';

describe('BazService', () => {
  let service: BazService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BazService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
