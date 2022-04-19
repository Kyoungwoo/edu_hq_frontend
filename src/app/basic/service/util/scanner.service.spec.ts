import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { ScannerService } from './scanner.service';

describe('ScannerService', () => {
  let service: ScannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        FormsModule,
        AppModule,
        ComponentModule
      ]
    });
    service = TestBed.inject(ScannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});