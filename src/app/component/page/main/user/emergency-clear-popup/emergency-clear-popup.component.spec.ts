import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmergencyClearPopupComponent } from './emergency-clear-popup.component';

describe('EmergencyClearPopupComponent', () => {
  let component: EmergencyClearPopupComponent;
  let fixture: ComponentFixture<EmergencyClearPopupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyClearPopupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmergencyClearPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
