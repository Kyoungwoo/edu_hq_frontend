import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindPasswordMobileResultPage } from './find-password-mobile-result.page';

describe('FindPasswordMobileResultPage', () => {
  let component: FindPasswordMobileResultPage;
  let fixture: ComponentFixture<FindPasswordMobileResultPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FindPasswordMobileResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindPasswordMobileResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
