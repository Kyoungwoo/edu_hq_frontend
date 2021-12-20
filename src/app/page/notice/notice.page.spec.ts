import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';

import { NoticePage } from './notice.page';

describe('NoticePage', () => {
  let component: NoticePage;
  let fixture: ComponentFixture<NoticePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticePage ],
      imports: [
        IonicModule.forRoot(),
        AppModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
