import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonitorSmartEquipEditPage } from './monitor-smart-equip-edit.page';

describe('MonitorSmartEquipEditPage', () => {
  let component: MonitorSmartEquipEditPage;
  let fixture: ComponentFixture<MonitorSmartEquipEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorSmartEquipEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitorSmartEquipEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
