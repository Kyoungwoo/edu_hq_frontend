import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { FullScreenService } from './full-screen.service';

describe('FullScreenService', () => {
  let service: FullScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppModule,
        ComponentModule
      ]
    });
    service = TestBed.inject(FullScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
