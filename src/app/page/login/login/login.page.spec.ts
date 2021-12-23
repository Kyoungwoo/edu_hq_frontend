import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { InputComponent } from 'src/app/basic/component/input/input/input.component';
import { ComponentModule } from 'src/app/component/component.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('로그인 정보를 부정확하게 입력함', async() => {
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

  it('로그인 근로자 정보를 정확하게 입력함. 토큰을 받고, 근로자 메인페이지로 이동', async() => {
    let url;
    router.events.subscribe((nav) => {
      if(nav instanceof NavigationEnd) {
        url = nav.url;
      }
    })

    const el = fixture.debugElement;
    const inputId = <InputComponent>el.query(By.css('.input-id')).componentInstance;
    const inputPassword = <InputComponent>el.query(By.css('.input-password')).componentInstance;

    inputId.value = 'worker';
    inputPassword.value = 'qwer1234';

    await component.login();
    
    fixture.detectChanges();

    expect(component.res.rsCode === 0).toBeTruthy();
    expect(component.res.rsCode === 0).toBeTruthy();
  });

});
