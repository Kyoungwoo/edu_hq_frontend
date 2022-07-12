import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitorCctvEditPage } from './monitor-cctv-edit.page';

describe('MonitorCctvEditPage', () => {
  let component: MonitorCctvEditPage;
  let fixture: ComponentFixture<MonitorCctvEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorCctvEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitorCctvEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
