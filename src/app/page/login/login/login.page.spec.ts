import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { InputComponent } from 'src/app/basic/component/input/input/input.component';
import { ComponentModule } from 'src/app/component/component.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        AppModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('account info incorrect insert', async() => {
    const el = fixture.debugElement;
    const inputId = <InputComponent>el.query(By.css('.input-id')).componentInstance;
    const inputPassword = <InputComponent>el.query(By.css('.input-password')).componentInstance;
    
    inputId.value = 'wfewef';
    inputPassword.value = 'ohoh';

    await component.login();

    fixture.detectChanges();

    expect(component.res.rsCode !== 0).toBeTruthy();
    
    const inputCaptionInvalid = <HTMLElement>el.query(By.css('.input-caption-invalid')).nativeElement;
    expect(inputCaptionInvalid).toBeTruthy();
  });

  it('account info correct insert', async() => {
    const el = fixture.debugElement;
    const inputId = <InputComponent>el.query(By.css('.input-id')).componentInstance;
    const inputPassword = <InputComponent>el.query(By.css('.input-password')).componentInstance;

    inputId.value = 'worker';
    inputPassword.value = 'qwer1234';

    await component.login();
    
    fixture.detectChanges();

    expect(component.res.rsCode === 0).toBeTruthy();
  });

});
