import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { LhOrganizationListComponent } from './lh-organization-list.component';

describe('LhOrganizationListComponent', () => {
  let component: LhOrganizationListComponent;
  let fixture: ComponentFixture<LhOrganizationListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LhOrganizationListComponent ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        AppModule,
        ComponentModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LhOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
