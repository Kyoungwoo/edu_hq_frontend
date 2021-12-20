import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { QrService } from './qr.service';

describe('NfcService', () => {
  let service: QrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    });
    service = TestBed.inject(QrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
