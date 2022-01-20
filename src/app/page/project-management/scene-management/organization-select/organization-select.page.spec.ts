import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from '../member-standard-set/component/component.module';

import { OrganizationSelectPage } from './organization-select.page';

describe('OrganizationSelectPage', () => {
  let component: OrganizationSelectPage;
  let fixture: ComponentFixture<OrganizationSelectPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationSelectPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        AppModule,
        ComponentModule
        
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizationSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
