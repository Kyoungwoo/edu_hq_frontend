import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmCcDetailSearchPage } from './confirm-cc-detail-search.page';

describe('ConfirmCcDetailSearchPage', () => {
  let component: ConfirmCcDetailSearchPage;
  let fixture: ComponentFixture<ConfirmCcDetailSearchPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmCcDetailSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmCcDetailSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
