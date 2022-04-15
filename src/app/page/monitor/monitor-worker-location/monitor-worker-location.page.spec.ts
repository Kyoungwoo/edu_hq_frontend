import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitorWorkerLocationPage } from './monitor-worker-location.page';

describe('MonitorWorkerLocationPage', () => {
  let component: MonitorWorkerLocationPage;
  let fixture: ComponentFixture<MonitorWorkerLocationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorWorkerLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitorWorkerLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
