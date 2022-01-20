import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { CardComponent } from 'src/app/basic/component/ui/card/card.component';
import { ComponentModule } from 'src/app/component/component.module';
import { SignUpComponentModule } from '../component/sign-up.component.module';

import { SignUpTypePage } from './sign-up-type.page';

describe('SignUpTypePage', () => {
  let component: SignUpTypePage;
  let fixture: ComponentFixture<SignUpTypePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpTypePage ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule,
        SignUpComponentModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpTypePage);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('onInit: 맨 처음에 다음 버튼은 비활성화 되어 있다.', () => {
    expect(component).toBeTruthy();

    const el = fixture.debugElement;
    const buttonFooter = el.query(By.css('[name=button-footer'));
    expect(buttonFooter).toBeFalsy();
  });

  it('각 타입을 선택하면 해당 카드가 하이라이트 되고, [다음] 버튼이 나타나게 된다. 클릭 시, 업체 선택 페이지로 이동한다.', async() => {
    let url;
    router.events.subscribe((nav => {
      if(nav instanceof NavigationEnd) {
        url = nav.urlAfterRedirects;
      }
    }));

    const el = fixture.debugElement;
    const cardTypeWorker = el.query(By.css('[name=card-type-worker]'));
    const cardTypeLH = el.query(By.css('[name=card-type-lh]'));
    const cardTypeSuper = el.query(By.css('[name=card-type-super]'));
    const cardTypeCompany = el.query(By.css('[name=card-type-company]'));
    
    cardTypeWorker.triggerEventHandler('click', null);
    fixture.detectChanges();

    const buttonFooter = el.query(By.css('[name=button-footer]'));
    const buttonNext = el.query(By.css('[name=button_next]'));

    expect(component.userType).toBe('WORKER');
    expect((<CardComponent>cardTypeWorker.componentInstance).color).toBe('secondary');
    expect(buttonFooter).toBeTruthy();

    cardTypeLH.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.userType).toBe('LH');
    expect((<CardComponent>cardTypeLH.componentInstance).color).toBe('secondary');
    expect(buttonFooter).toBeTruthy();

    cardTypeSuper.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.userType).toBe('SUPER');
    expect((<CardComponent>cardTypeSuper.componentInstance).color).toBe('secondary');
    expect(buttonFooter).toBeTruthy();

    cardTypeCompany.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.userType).toBe('COMPANY');
    expect((<CardComponent>cardTypeCompany.componentInstance).color).toBe('secondary');
    expect(buttonFooter).toBeTruthy();

    buttonNext.triggerEventHandler('click', { preventDefault: () => {} });
    await new Promise(res => setTimeout(res, 100));
    fixture.detectChanges();
    // 다음페이지 클릭
    
    expect(url).toEqual(`/sign-up-company?userType=${component.userType}`);
  })
});
