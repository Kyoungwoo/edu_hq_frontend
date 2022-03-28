import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkerMinutesSelectTypePage } from './worker-minutes-select-type.page';

describe('WorkerMinutesSelectTypePage', () => {
  let component: WorkerMinutesSelectTypePage;
  let fixture: ComponentFixture<WorkerMinutesSelectTypePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerMinutesSelectTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkerMinutesSelectTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
