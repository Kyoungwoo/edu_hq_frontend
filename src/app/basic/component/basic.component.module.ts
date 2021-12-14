import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { DaumComponent } from './dialog/daum/daum.component';
import { CalendarPopoverComponent } from './input/calendar-popover/calendar-popover.component';
import { CalendarComponent } from './input/calendar/calendar.component';
import { CheckGroupComponent } from './input/check-group/check-group.component';
import { CheckComponent } from './input/check/check.component';
import { DatetimePopoverComponent } from './input/datetime-popover/datetime-popover.component';
import { DatetimeComponent } from './input/datetime/datetime.component';
import { FileComponent } from './input/file/file.component';
import { InputCaptionComponent } from './input/input-caption/input-caption.component';
import { InputComponent } from './input/input/input.component';
import { NaverMapComponent } from './input/naver-map/naver-map.component';
import { SelectMultiplePopoverComponent } from './input/select-multiple-popover/select-multiple-popover.component';
import { SelectOptionComponent } from './input/select-option/select-option.component';
import { SelectPopoverComponent } from './input/select-popover/select-popover.component';
import { SelectComponent } from './input/select/select.component';
import { TextareaComponent } from './input/textarea/textarea.component';
import { AvatarComponent } from './ui/avatar/avatar.component';
import { ButtonFooterComponent } from './ui/button-footer/button-footer.component';
import { ButtonComponent } from './ui/button/button.component';
import { CardComponent } from './ui/card/card.component';
import { ColComponent } from './ui/col/col.component';
import { ContainerComponent } from './ui/container/container.component';
import { CopyRightComponent } from './ui/copy-right/copy-right.component';
import { ImgComponent } from './ui/img/img.component';
import { LogoComponent } from './ui/logo/logo.component';
import { ModalDismissButtonComponent } from './ui/modal-dismiss-button/modal-dismiss-button.component';
import { RowComponent } from './ui/row/row.component';
import { TableComponent } from './ui/table/table.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LineComponent } from './ui/line/line.component';
import { RadioComponent } from './input/radio/radio.component';
import { RadioInputComponent } from './input/radio-input/radio-input.component';
import { RadioGroupComponent } from './input/radio-group/radio-group.component';
import { InputTemplateComponent } from './input/input-template/input-template.component';
import { InputGroupComponent } from './input/input-group/input-group.component';
import { PagerComponent } from './ui/pager/pager.component';
@NgModule({
  declarations: [
    // dialog components
    DaumComponent,
    // input components
    CalendarComponent,
    CalendarPopoverComponent,
    CheckComponent,
    CheckGroupComponent,
    DatetimeComponent,
    DatetimePopoverComponent,
    FileComponent,
    InputComponent,
    InputCaptionComponent,
    InputGroupComponent,
    InputTemplateComponent,
    NaverMapComponent,
    RadioComponent,
    RadioGroupComponent,
    RadioInputComponent,
    SelectComponent,
    SelectMultiplePopoverComponent,
    SelectOptionComponent,
    SelectPopoverComponent,
    TextareaComponent,
    // ui components
    AvatarComponent,
    ButtonComponent,
    ButtonFooterComponent,
    CardComponent,
    ColComponent,
    ContainerComponent,
    CopyRightComponent,
    ImgComponent,
    LineComponent,
    LogoComponent,
    RowComponent,
    TableComponent,
    ModalDismissButtonComponent,
    PagerComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,
    RouterModule,
    ScrollingModule
  ],
  exports: [
    // input components
    CalendarComponent,
    CheckComponent,
    CheckGroupComponent,
    DatetimeComponent,
    FileComponent,
    InputComponent,
    InputCaptionComponent,
    InputGroupComponent,
    InputTemplateComponent,
    NaverMapComponent,
    RadioComponent,
    RadioGroupComponent,
    RadioInputComponent,
    SelectComponent,
    SelectOptionComponent,
    TextareaComponent,
    // ui components
    AvatarComponent,
    ButtonComponent,
    ButtonFooterComponent,
    CardComponent,
    ColComponent,
    ContainerComponent,
    CopyRightComponent,
    ImgComponent,
    LineComponent,
    LogoComponent,
    RowComponent,
    TableComponent,
    ModalDismissButtonComponent,
    PagerComponent
  ]
})
export class BasicComponentModule { }
