import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { DirectiveModule } from '../directive/directive.module';
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
import { DismissButtonComponent } from './ui/dismiss-button/dismiss-button.component';
import { EmailComponent } from './input/email/email.component';
import { SmarteditComponent } from './input/smartedit/smartedit.component';
import { MenuButtonComponent } from './ui/menu-button/menu-button.component';
import { NfcComponent } from './dialog/nfc/nfc.component';
import { GraphGroupComponent } from './ui/graph-group/graph-group.component';
import { GraphValueComponent } from './ui/graph-value/graph-value.component';
import { GraphLineComponent } from './ui/graph-line/graph-line.component';
import { FilePreviewComponent } from './ui/file-preview/file-preview.component';
import { FilePopoverComponent } from './input/file-popover/file-popover.component';
import { QrScannerComponent } from './dialog/qr-scanner/qr-scanner.component';
import { NaverUserMapComponent } from './input/naver-user-map/naver-user-map.component';
import { NaverUserMapModalComponent } from './input/naver-user-map-modal/naver-user-map-modal.component';
import { CircleComponent } from './ui/circle/circle.component';

@NgModule({
  declarations: [
    // dialog components
    DaumComponent,
    QrScannerComponent,
    // input components
    CalendarComponent,
    CalendarPopoverComponent,
    CheckComponent,
    CheckGroupComponent,
    DatetimeComponent,
    DatetimePopoverComponent,
    EmailComponent,
    FileComponent,
    FilePopoverComponent,
    InputComponent,
    InputCaptionComponent,
    InputGroupComponent,
    InputTemplateComponent,
    NaverMapComponent,
    NaverUserMapComponent,
    NaverUserMapModalComponent,
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
    CircleComponent,
    ColComponent,
    ContainerComponent,
    CopyRightComponent, 
    DismissButtonComponent,
    FilePreviewComponent,
    GraphGroupComponent,
    GraphLineComponent,
    GraphValueComponent,
    ImgComponent,
    LineComponent,
    LogoComponent,
    MenuButtonComponent,
    RowComponent,
    TableComponent,
    PagerComponent,
    SmarteditComponent,
    NfcComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    DirectiveModule,
    PipesModule,
    RouterModule,
    ScrollingModule
  ],
  exports: [
    //dialog
    DaumComponent,
    QrScannerComponent,
    // input components
    DirectiveModule,
    CalendarComponent,
    CheckComponent,
    CheckGroupComponent,
    CircleComponent,
    DatetimeComponent,
    EmailComponent,
    FileComponent,
    InputComponent,
    InputCaptionComponent,
    InputGroupComponent,
    InputTemplateComponent,
    NaverMapComponent,
    NaverUserMapComponent,
    NaverUserMapModalComponent,
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
    DismissButtonComponent,
    FilePreviewComponent,
    GraphGroupComponent,
    GraphLineComponent,
    GraphValueComponent,
    ImgComponent,
    LineComponent,
    LogoComponent,
    MenuButtonComponent,
    RowComponent,
    TableComponent,
    PagerComponent,
    SmarteditComponent,
    NfcComponent
  ]
})
export class BasicComponentModule { }
