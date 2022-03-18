import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { RegexService } from './regex.service';

describe('RegexService', () => {
  let service: RegexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppModule,
        ComponentModule
      ]
    });
    service = TestBed.inject(RegexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
