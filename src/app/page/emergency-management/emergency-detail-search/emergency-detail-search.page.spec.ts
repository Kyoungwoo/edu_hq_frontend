import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { EmergencyDetailSearchPage } from './emergency-detail-search.page';

describe('EmergencyDetailSearchPage', () => {
  let component: EmergencyDetailSearchPage;
  let fixture: ComponentFixture<EmergencyDetailSearchPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyDetailSearchPage ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EmergencyDetailSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
