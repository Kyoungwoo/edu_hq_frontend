import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from '../../component.module';

import { SearchSceneComponentHq } from './search-scene-hq.component';

describe('SearchSceneComponent', () => {
  let component: SearchSceneComponentHq;
  let fixture: ComponentFixture<SearchSceneComponentHq>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSceneComponentHq],
      imports: [IonicModule.forRoot(), AppModule, FormsModule, ComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchSceneComponentHq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
