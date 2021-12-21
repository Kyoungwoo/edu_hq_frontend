import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { DeviceService } from './device.service';

describe('DeviceService', () => {
  let service: DeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppModule,
        ComponentModule
      ]
    });
    service = TestBed.inject(DeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
