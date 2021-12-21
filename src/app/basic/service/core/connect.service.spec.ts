import { TestBed } from '@angular/core/testing';

import { ConnectService } from './connect.service';

import { AppModule } from 'src/app/app.module';
import { FormsModule } from '@angular/forms';
import { ComponentModule } from 'src/app/component/component.module';

describe('ConnectService', () => {
  let service: ConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppModule,
        ComponentModule
      ]
    });
    service = TestBed.inject(ConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
