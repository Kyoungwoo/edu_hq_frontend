import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';
import { SignUpComponentModule } from '../component/sign-up.component.module';

import { SignUpWorkerPage } from './sign-up-worker.page';
import { SignUpWorkerForm } from './sign-up-worker.interface';

describe('SignUpWorkerPage', () => {
  let component: SignUpWorkerPage;
  let fixture: ComponentFixture<SignUpWorkerPage>;
  let activedRoute;
  let form:SignUpWorkerForm;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpWorkerPage ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule,
        SignUpComponentModule,
        RouterTestingModule
      ],
      /* providers: [
        { provide: ActivatedRoute, useValue: activedRoute }
      ] */
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpWorkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('onInit: 화면 생성 및 더미 회사 파라미터 가져오기', () => {
    expect(component).toBeTruthy();
    // company_id=1&business_register_no=1544&company_name=데브몬스터&company_ceo=1
  });
});
