import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectAreaRiskTypeComponent } from './select-area-risk-type.component';

describe('SelectAreaRiskComponent', () => {
  let component: SelectAreaRiskTypeComponent;
  let fixture: ComponentFixture<SelectAreaRiskTypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAreaRiskTypeComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectAreaRiskTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
