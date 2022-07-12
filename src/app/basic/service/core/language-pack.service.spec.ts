import { TestBed } from '@angular/core/testing';

import { LanguagePackService } from './language-pack.service';

describe('LanguagePackService', () => {
  let service: LanguagePackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguagePackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
