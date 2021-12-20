import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';

import { MoniterPage } from './moniter.page';

describe('MoniterPage', () => {
  let component: MoniterPage;
  let fixture: ComponentFixture<MoniterPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MoniterPage ],
      imports: [
        IonicModule.forRoot(),
        AppModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MoniterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
