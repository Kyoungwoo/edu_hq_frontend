import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

export type SelectOptionType = 'all' | 'edit' | 'default';
export interface SelectOption {
  value:any,
  text:string,
  type:SelectOptionType
}
@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent implements OnInit {

  @ViewChild('textEl') textEl:ElementRef<HTMLElement>;

  @Input() value:any = null;
  @Input() type:SelectOptionType = 'default';
  public get text() { return this.textEl.nativeElement.innerHTML }

  constructor() { }
  ngOnInit() {}
}