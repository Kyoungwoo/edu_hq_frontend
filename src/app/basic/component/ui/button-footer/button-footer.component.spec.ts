import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';

import { ButtonFooterComponent } from './button-footer.component';

describe('ButtonFooterComponent', () => {
  let component: ButtonFooterComponent;
  let fixture: ComponentFixture<ButtonFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonFooterComponent ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
