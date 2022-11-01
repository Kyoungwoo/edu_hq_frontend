import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PtwRiskEvaluationPage } from './ptw-risk-evaluation.page';

describe('PtwRiskEvaluationPage', () => {
  let component: PtwRiskEvaluationPage;
  let fixture: ComponentFixture<PtwRiskEvaluationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PtwRiskEvaluationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PtwRiskEvaluationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
