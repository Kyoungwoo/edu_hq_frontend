import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { DaumService } from './daum.service';

describe('DaumService', () => {
  let service: DaumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
          FormsModule,
          AppModule,
          ComponentModule
      ]
    });
    service = TestBed.inject(DaumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
