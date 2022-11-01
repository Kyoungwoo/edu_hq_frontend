import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { EmergencyWarningPage } from './emergency-warning.page';

describe('EmergencyWarningPage', () => {
  let component: EmergencyWarningPage;
  let fixture: ComponentFixture<EmergencyWarningPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyWarningPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        AppModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EmergencyWarningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
