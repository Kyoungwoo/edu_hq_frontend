import { ScrollingModule } from '@angular/cdk/scrolling';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { SelectMultiplePopoverComponent } from './select-multiple-popover.component';

describe('SelectMultiplePopoverComponent', () => {
  let component: SelectMultiplePopoverComponent;
  let fixture: ComponentFixture<SelectMultiplePopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMultiplePopoverComponent ],
      imports: [
        IonicModule.forRoot(),
        ScrollingModule,
        FormsModule,
        AppModule,
        ComponentModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectMultiplePopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
