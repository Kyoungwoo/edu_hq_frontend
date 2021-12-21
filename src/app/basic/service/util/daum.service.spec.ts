import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { DaumService } from './daum.service';

describe('DaumService', () => {
  let service: DaumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    });
    service = TestBed.inject(DaumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
