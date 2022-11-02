import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from '../../component.module';

import { SelectSceneComponentHq } from './select-scene-hq.component';

describe('SelectSceneComponentHq', () => {
  let component: SelectSceneComponentHq;
  let fixture: ComponentFixture<SelectSceneComponentHq>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSceneComponentHq],
      imports: [IonicModule.forRoot(), AppModule, FormsModule, ComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectSceneComponentHq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
