import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from '../../component.module';

import { SearchActionPeopleComponent } from './search-action-people.component';

describe('SearchActionPeopleComponent', () => {
  let component: SearchActionPeopleComponent;
  let fixture: ComponentFixture<SearchActionPeopleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchActionPeopleComponent ],
      imports: [
        IonicModule.forRoot(),
        AppModule,
        FormsModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchActionPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
