import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent implements OnInit {

  @ViewChild('textEl') textEl:ElementRef<HTMLElement>;

  @Input() value:any = null;
  @Input() type:'all' | 'normal' = 'normal';
  public get text() { return this.textEl.nativeElement.innerHTML }

  constructor() { }
  ngOnInit() {}
}