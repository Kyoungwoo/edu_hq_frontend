import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodayDepartureStatusEditPage } from './today-danger-area-status-edit.page';

describe('TodayDepartureStatusEditPage', () => {
  let component: TodayDepartureStatusEditPage;
  let fixture: ComponentFixture<TodayDepartureStatusEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayDepartureStatusEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodayDepartureStatusEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
