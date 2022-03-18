import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { NfcService } from './nfc.service';

describe('NfcService', () => {
  let service: NfcService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        AppModule,
        ComponentModule
      ]
    });
    service = TestBed.inject(NfcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
