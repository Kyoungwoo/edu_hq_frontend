import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from '../../component.module';

import { SearchTbmComponent } from './search-tbm.component';

describe('SearchSceneComponent', () => {
  let component: SearchTbmComponent;
  let fixture: ComponentFixture<SearchTbmComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTbmComponent ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
