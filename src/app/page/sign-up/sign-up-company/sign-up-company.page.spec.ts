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
import { UserType } from 'src/app/basic/service/core/user.service';
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
