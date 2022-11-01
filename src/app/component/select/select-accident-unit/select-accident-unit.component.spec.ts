import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectAccidentUnitComponent } from './select-accident-unit.component';

describe('SelectAccidentUnitComponent', () => {
  let component: SelectAccidentUnitComponent;
  let fixture: ComponentFixture<SelectAccidentUnitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAccidentUnitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectAccidentUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
