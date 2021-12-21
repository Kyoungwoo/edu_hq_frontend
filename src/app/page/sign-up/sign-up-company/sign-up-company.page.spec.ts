import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { InputComponent } from 'src/app/basic/component/input/input/input.component';
import { ComponentModule } from 'src/app/component/component.module';

import { SignUpCompanyPage } from './sign-up-company.page';

describe('SignUpCompanyPage', () => {
  let component: SignUpCompanyPage;
  let fixture: ComponentFixture<SignUpCompanyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpCompanyPage ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpCompanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('onInit: 초기 레이아웃 검토', () => {
    expect(component).toBeTruthy();

    const el = fixture.debugElement;
    const resultNull = el.query(By.css('#result-null'));
    const buttonNext = el.query(By.css('#button-next'));
    expect(resultNull).toBeTruthy();
    expect(buttonNext).toBeFalsy();
  });

  it('매칭이 안되는 글자를 넣어서 검색하면, 1008을 반환하고, result-fail 레이아웃이 나온다.', async() => {
    const el = fixture.debugElement;
    const inputSearch = el.query(By.css('#input-search'));
    (<InputComponent>inputSearch.componentInstance).value = "4431";
    let res = await component.searchCompany();
    
    fixture.detectChanges();
    
    const resultFail = el.query(By.css('#result-fail'));
    expect(res.rsCode).toEqual(1008);
    expect(resultFail).toBeTruthy();
  });

  it('회사 검색창에 검색어(데브)를 넣어서 검색하면, 서버와 통신하여 회사가 나온다.', async() => {
    const el = fixture.debugElement;
    const inputSearch = el.query(By.css('#input-search'));
    (<InputComponent>inputSearch.componentInstance).value = "데브";
    const res = await component.searchCompany();
    fixture.detectChanges();

    const resultSuccess = el.query(By.css('#result-success'));
    expect(res.rsCode).toEqual(0);
    expect(resultSuccess).toBeTruthy();
  });
});
