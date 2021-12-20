import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/component/component.module';
import { SignUpComponentModule } from '../component/sign-up.component.module';

import { SignUpTypePage } from './sign-up-type.page';

describe('SignUpTypePage', () => {
  let component: SignUpTypePage;
  let fixture: ComponentFixture<SignUpTypePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpTypePage ],
      imports: [
        IonicModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
