import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { PromiseService } from './promise.service';

describe('PromiseService', () => {
  let service: PromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppModule,
        ComponentModule
      ]
    });
    service = TestBed.inject(PromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
