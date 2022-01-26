import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindIdMobilePhonePage } from './find-id-mobile-phone.page';

describe('FindIdMobilePhonePage', () => {
  let component: FindIdMobilePhonePage;
  let fixture: ComponentFixture<FindIdMobilePhonePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FindIdMobilePhonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindIdMobilePhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
