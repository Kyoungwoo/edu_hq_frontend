import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchConstructionMachineryComponent } from './search-construction-machinery.component';

describe('SearchConstructionMachineryComponent', () => {
  let component: SearchConstructionMachineryComponent;
  let fixture: ComponentFixture<SearchConstructionMachineryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchConstructionMachineryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchConstructionMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
