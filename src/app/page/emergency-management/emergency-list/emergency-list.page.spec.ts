import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { EmergencyListPage } from './emergency-list.page';

describe('TbmListPate', () => {
  let component: EmergencyListPage;
  let fixture: ComponentFixture<EmergencyListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyListPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        AppModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EmergencyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
