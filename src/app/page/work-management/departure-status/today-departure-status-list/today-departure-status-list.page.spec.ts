import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodayDepartureStatusListPage } from './today-departure-status-list.page';

describe('TodayDepartureStatusListPage', () => {
  let component: TodayDepartureStatusListPage;
  let fixture: ComponentFixture<TodayDepartureStatusListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayDepartureStatusListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodayDepartureStatusListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
