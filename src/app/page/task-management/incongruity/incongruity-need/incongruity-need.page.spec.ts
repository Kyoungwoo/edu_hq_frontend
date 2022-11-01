import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { IncongruityNeedPage } from './incongruity-need.page';

describe('IncongruityNeedPage', () => {
  let component: IncongruityNeedPage;
  let fixture: ComponentFixture<IncongruityNeedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IncongruityNeedPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        AppModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IncongruityNeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
