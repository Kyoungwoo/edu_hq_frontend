import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { InputComponent } from 'src/app/basic/component/input/input/input.component';
import { CardComponent } from 'src/app/basic/component/ui/card/card.component';
import { ComponentModule } from 'src/app/component/component.module';

import { SignUpCompanyPage } from './sign-up-company.page';

describe('SignUpCompanyPage', () => {
  let component: SignUpCompanyPage;
  let fixture: ComponentFixture<SignUpCompanyPage>;
  let router: Router;
  let url: string;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpCompanyPage ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParams: of({ userType: 'WORKER' }) } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpCompanyPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    router.events.subscribe(nav => {
      if(nav instanceof NavigationEnd) {
        url = nav.urlAfterRedirects;
      }
    });
    fixture.detectChanges();
  }));

  it('onInit: 초기 레이아웃 검토', () => {
    expect(component).toBeTruthy();

    const el = fixture.debugElement;
    const resultNull = el.query(By.css('[name=result-null]'));
    const buttonNext = el.query(By.css('[name=button-next]'));
    expect(resultNull).toBeTruthy();
    expect(buttonNext).toBeFalsy();
  });

  it('매칭이 안되는 글자를 넣어서 검색하면, 1008을 반환하고, result-fail 레이아웃이 나온다.', async() => {
    const el = fixture.debugElement;
    const inputSearch = el.query(By.css('[name=input-search]'));
    (<InputComponent>inputSearch.componentInstance).value = "4431";
    let res = await component.searchCompany();
    
    fixture.detectChanges();
    
    const resultFail = el.query(By.css('[name=result-fail]'));
    expect(res.rsCode).toEqual(1008);
    expect(resultFail).toBeTruthy();
  });

  it('업체 검색창에 검색어(데브)를 넣어서 검색하면, 서버와 통신하여 업체가 나온다. 이때 클릭하면 타입에 따라, 업체정보를 들고 다음페이지로 넘어감.', async() => {
    component.params.userType = 'WORKER';

    const el = fixture.debugElement;
    const inputSearch = el.query(By.css('[name=input-search]'));
    (<InputComponent>inputSearch.componentInstance).value = "데브";
    const res = await component.searchCompany();
    fixture.detectChanges();

    const resultSuccess = el.query(By.css('[name=result-success]'));
    expect(res.rsCode).toEqual(0);
    expect(resultSuccess).toBeTruthy();
    //검색 완료

    const companyList = el.queryAll(By.css('[name=company-item]'));
    const firstCompanyItem = companyList[0];

    firstCompanyItem.triggerEventHandler('click', null);
    fixture.detectChanges();
    // 클릭 완료
    
    const buttonNext = el.query(By.css('[name=button-next]'));
    expect((<CardComponent>firstCompanyItem.componentInstance).color).toEqual('secondary');
    expect(buttonNext).toBeTruthy();
    // 레이아웃 변경 완료

    let queryParams = [];
    for(let key in component.selectedCompany) {
      queryParams.push(`${key}=${component.selectedCompany[key]}`);
    }
    const expectedUrl = component.nextRouterLink + '?' + queryParams.join('&');
    buttonNext.triggerEventHandler('click', { preventDefault: () => {} });
    await new Promise(res => setTimeout(res, 100));
    fixture.detectChanges();
    // 다음페이지 클릭

    expect(decodeURI(url)).toEqual(expectedUrl);
  });
});
