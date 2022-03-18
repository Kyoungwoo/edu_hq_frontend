import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';
import { SignUpComponentModule } from '../component/sign-up.component.module';

import { SignUpWorkerPage } from './sign-up-worker.page';
import { SignUpCompanyInfoMock } from '../sign-up.interface';

describe('SignUpWorkerPage', () => {
  let component: SignUpWorkerPage;
  let fixture: ComponentFixture<SignUpWorkerPage>;

  beforeEach(waitForAsync(() => {
    window.history.pushState({ companyInfo: new SignUpCompanyInfoMock() }, '', '');

    TestBed.configureTestingModule({
      declarations: [ SignUpWorkerPage ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule,
        SignUpComponentModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpWorkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async() => {
    expect(component).toBeTruthy();
  });
});
