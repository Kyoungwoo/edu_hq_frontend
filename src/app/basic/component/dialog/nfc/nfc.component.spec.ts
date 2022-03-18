import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { NfcComponent } from './nfc.component';

describe('NfcComponent', () => {
  let component: NfcComponent;
  let fixture: ComponentFixture<NfcComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NfcComponent ],
      imports: [IonicModule.forRoot(),
      FormsModule,
      AppModule,
      ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
