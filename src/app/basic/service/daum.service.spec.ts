import { TestBed } from '@angular/core/testing';

import { DaumService } from './daum.service';

describe('DaumService', () => {
  let service: DaumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
