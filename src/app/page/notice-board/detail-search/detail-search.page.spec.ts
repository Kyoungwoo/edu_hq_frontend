import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from '../../project-management/scene-management/member-standard-set/component/component.module';

import { DetailSearchPage } from './detail-search.page';

describe('DetailSearchPage', () => {
  let component: DetailSearchPage;
  let fixture: ComponentFixture<DetailSearchPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSearchPage ],
      imports: [
        IonicModule.forRoot(),
        FormsModule,
        AppModule,
        ComponentModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
