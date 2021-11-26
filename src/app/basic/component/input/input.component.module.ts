import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../../pipes/pipes.module';

import { CalendarComponent } from './calendar/calendar.component';
import { CalendarPopoverComponent } from './calendar-popover/calendar-popover.component';
import { CheckComponent } from './check/check.component';
import { InputFileComponent } from './input-file/input-file.component';
import { InputCaptionComponent } from './input-caption/input-caption.component';
import { InputComponent } from './input/input.component';
import { SelectOptionComponent } from './select-option/select-option.component';
import { SelectPopoverComponent } from './select-popover/select-popover.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { InputCameraComponent } from './input-camera/input-camera.component';
import { UiComponentModule } from '../ui/ui.component.module';
import { CheckGroupComponent } from './check-group/check-group.component';


@NgModule({
  declarations: [
    CalendarComponent,
    CalendarPopoverComponent,
    CheckComponent,
    CheckGroupComponent,
    InputComponent,
    InputCaptionComponent,
    InputCameraComponent,
    InputFileComponent,
    SelectComponent,
    SelectOptionComponent,
    SelectPopoverComponent,
    TextareaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule,
    ScrollingModule,
    UiComponentModule
  ],
  exports: [
    CalendarComponent,
    CheckComponent,
    CheckGroupComponent,
    InputComponent,
    InputCaptionComponent,
    InputCameraComponent,
    InputFileComponent,
    SelectComponent,
    SelectOptionComponent,
    TextareaComponent
  ]
})
export class InputComponentModule { }
