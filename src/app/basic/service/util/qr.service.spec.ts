import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { QrService } from './qr.service';

describe('NfcService', () => {
  let service: QrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        FormsModule,
        AppModule,
        ComponentModule
      ]
    });
    service = TestBed.inject(QrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
