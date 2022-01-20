import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { WorkerStatusAddPage } from './worker-status-add.page';

describe('WorkerStatusAddPage', () => {
  let component: WorkerStatusAddPage;
  let fixture: ComponentFixture<WorkerStatusAddPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerStatusAddPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        AppModule,
        ComponentModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkerStatusAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
