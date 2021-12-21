import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';

import { SignUpWorkerPage } from './sign-up-worker.page';

describe('SignUpWorkerPage', () => {
  let component: SignUpWorkerPage;
  let fixture: ComponentFixture<SignUpWorkerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpWorkerPage ],
      imports: [
        IonicModule.forRoot(),
        AppModule
        
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpWorkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
