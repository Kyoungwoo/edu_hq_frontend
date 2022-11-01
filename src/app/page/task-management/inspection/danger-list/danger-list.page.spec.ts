import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { DangerListPage } from './danger-list.page';

describe('DangerListPage', () => {
  let component: DangerListPage;
  let fixture: ComponentFixture<DangerListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerListPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        AppModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DangerListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
