import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindPasswordMobilePhonePage } from './find-password-mobile-phone.page';

describe('FindPasswordMobilePhonePage', () => {
  let component: FindPasswordMobilePhonePage;
  let fixture: ComponentFixture<FindPasswordMobilePhonePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPasswordMobilePhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindPasswordMobilePhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
