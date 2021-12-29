import { Component, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Color } from '@ionic/core';

@Component({
  selector: 'app-input-template',
  templateUrl: './input-template.component.html',
  styleUrls: ['./input-template.component.scss'],
})
export class InputTemplateComponent implements OnInit {

  @HostBinding('class') get class() {
    let _class = [];
    if(this.color) _class.push(`ion-color-${this.color}`);
    this.label ? _class.push(`input-label`) : _class.push(`input-no-label`);
    return _class.join(' ');
  }

  @Input() label:string;
  @Input() color:Color = 'white';

  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onButtonClick() {
    this.buttonClick.emit();
  }

  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
}