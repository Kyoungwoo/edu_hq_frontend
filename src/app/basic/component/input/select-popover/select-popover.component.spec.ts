import { ScrollingModule } from '@angular/cdk/scrolling';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectPopoverComponent } from './select-popover.component';

describe('SelectPopoverComponent', () => {
  let component: SelectPopoverComponent;
  let fixture: ComponentFixture<SelectPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPopoverComponent ],
      imports: [
        IonicModule.forRoot(),
        ScrollingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
