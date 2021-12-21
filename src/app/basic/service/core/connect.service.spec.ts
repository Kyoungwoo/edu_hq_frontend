import { TestBed } from '@angular/core/testing';

import { ConnectService } from './connect.service';

import { AppModule } from 'src/app/app.module';

describe('ConnectService', () => {
  let service: ConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    });
    service = TestBed.inject(ConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
