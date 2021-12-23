import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';
import { SignUpComponentModule } from '../../component/sign-up.component.module';

import { SignUpHealthPage } from './sign-up-health.page';

describe('SignUpHealthPage', () => {
  let component: SignUpHealthPage;
  let fixture: ComponentFixture<SignUpHealthPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpHealthPage ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule,
        SignUpComponentModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpHealthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
