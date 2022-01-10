import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationConfirmPendingListPage } from './education-confirm-pending-list.page';

describe('EducationConfirmPendingListPage', () => {
  let component: EducationConfirmPendingListPage;
  let fixture: ComponentFixture<EducationConfirmPendingListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationConfirmPendingListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationConfirmPendingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
