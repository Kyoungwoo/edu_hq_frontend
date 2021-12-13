import { Component, ElementRef, HostBinding, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-template',
  templateUrl: './input-template.component.html',
  styleUrls: ['./input-template.component.scss'],
})
export class InputTemplateComponent implements OnInit {

  @HostBinding('class.input-label') get classLabel() { return this.label }
  @Input() label:string;

  @Output() buttonClick = new EventEmitter();

  buttonVisible:boolean = false;
  
  @ViewChild('button') set button(_button:ElementRef<HTMLElement>) {
    if(!_button) return;
    const buttonEl = _button.nativeElement;
    const nodeList = buttonEl.childNodes;
    this.buttonVisible = nodeList.length > 1;
  }

  constructor() { }

  ngOnInit() {}

  onButtonClick() {
    this.buttonClick.emit();
  }

  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;

}
