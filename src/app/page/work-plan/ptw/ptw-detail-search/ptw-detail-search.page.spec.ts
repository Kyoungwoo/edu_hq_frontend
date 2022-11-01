import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { PtwDetailSearchPage } from './ptw-detail-search.page';

describe('PtwDetailSearchPage', () => {
  let component: PtwDetailSearchPage;
  let fixture: ComponentFixture<PtwDetailSearchPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PtwDetailSearchPage ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PtwDetailSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
