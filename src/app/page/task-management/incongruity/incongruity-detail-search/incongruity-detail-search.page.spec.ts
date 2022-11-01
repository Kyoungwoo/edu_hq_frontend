import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { IncongruityDetailSearchPage } from './incongruity-detail-search.page';

describe('IncongruityDetailSearchPage', () => {
  let component: IncongruityDetailSearchPage;
  let fixture: ComponentFixture<IncongruityDetailSearchPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IncongruityDetailSearchPage ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IncongruityDetailSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
