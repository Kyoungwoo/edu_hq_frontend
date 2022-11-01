import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { EmergencyTargetPage } from './emergency-target.page';

describe('EmergencyTargetPage', () => {
  let component: EmergencyTargetPage;
  let fixture: ComponentFixture<EmergencyTargetPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyTargetPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        AppModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EmergencyTargetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
