import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectBusinessDistrictComponent } from './select-business-district.component';

describe('SelectBusinessDistrictComponent', () => {
  let component: SelectBusinessDistrictComponent;
  let fixture: ComponentFixture<SelectBusinessDistrictComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBusinessDistrictComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectBusinessDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
