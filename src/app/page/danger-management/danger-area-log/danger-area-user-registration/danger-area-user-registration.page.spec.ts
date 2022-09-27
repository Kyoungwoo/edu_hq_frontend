import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DangerAreaUserRegistrationPage } from './danger-area-user-registration.page';

describe('TodayDepartureStatusEditPage', () => {
  let component: DangerAreaUserRegistrationPage;
  let fixture: ComponentFixture<DangerAreaUserRegistrationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DangerAreaUserRegistrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DangerAreaUserRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
