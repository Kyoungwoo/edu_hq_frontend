import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-select-area-risk-type',
  templateUrl: './select-area-risk-type.component.html',
  styleUrls: ['./select-area-risk-type.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectAreaRiskTypeComponent),
      multi: true,
    },
  ],
})
export class SelectAreaRiskTypeComponent
  implements OnInit, ControlValueAccessor
{
  @Input() color: Color;
  @Input() protected label = '위험지역 타입';

  constructor() {}

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {}
}
