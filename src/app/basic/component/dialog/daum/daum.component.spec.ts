import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';

import { DaumComponent } from './daum.component';

describe('DaumComponent', () => {
  let component: DaumComponent;
  let fixture: ComponentFixture<DaumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaumComponent ],
      imports: [
        IonicModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DaumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
