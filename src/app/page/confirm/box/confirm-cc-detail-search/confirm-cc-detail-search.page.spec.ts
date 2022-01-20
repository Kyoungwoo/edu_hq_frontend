import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { ConfirmCcDetailSearchPage } from './confirm-cc-detail-search.page';

describe('ConfirmCcDetailSearchPage', () => {
  let component: ConfirmCcDetailSearchPage;
  let fixture: ComponentFixture<ConfirmCcDetailSearchPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCcDetailSearchPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        AppModule,
        ComponentModule

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmCcDetailSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
