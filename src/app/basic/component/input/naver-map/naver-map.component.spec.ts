import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';

import { NaverMapComponent } from './naver-map.component';

describe('NaverMapComponent', () => {
  let component: NaverMapComponent;
  let fixture: ComponentFixture<NaverMapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NaverMapComponent ],
      imports: [
        IonicModule.forRoot(),
        AppModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NaverMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
