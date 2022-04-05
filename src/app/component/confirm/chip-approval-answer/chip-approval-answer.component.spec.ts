import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChipApprovalAnswerComponent } from './chip-approval-answer.component';

describe('ChipApprovalAnswerComponent', () => {
  let component: ChipApprovalAnswerComponent;
  let fixture: ComponentFixture<ChipApprovalAnswerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipApprovalAnswerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChipApprovalAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
