import { ScrollingModule } from '@angular/cdk/scrolling';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/component/component.module';

import { SelectPopoverComponent } from './select-popover.component';

describe('SelectPopoverComponent', () => {
  let component: SelectPopoverComponent;
  let fixture: ComponentFixture<SelectPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPopoverComponent ],
      imports: [
        IonicModule.forRoot(),
        ScrollingModule,
        FormsModule,
        AppModule,
        ComponentModule
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
