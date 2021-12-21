import { ScrollingModule } from '@angular/cdk/scrolling';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectMultiplePopoverComponent } from './select-multiple-popover.component';

describe('SelectMultiplePopoverComponent', () => {
  let component: SelectMultiplePopoverComponent;
  let fixture: ComponentFixture<SelectMultiplePopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMultiplePopoverComponent ],
      imports: [
        IonicModule.forRoot(),
        ScrollingModule
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
