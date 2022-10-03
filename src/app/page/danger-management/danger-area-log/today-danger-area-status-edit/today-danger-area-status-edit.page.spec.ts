import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodayDangerAreaStatusEditPage } from './today-danger-area-status-edit.page';

describe('TodayDangerAreaStatusEditPage', () => {
  let component: TodayDangerAreaStatusEditPage;
  let fixture: ComponentFixture<TodayDangerAreaStatusEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TodayDangerAreaStatusEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodayDangerAreaStatusEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
