import { Component, HostBinding, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Color } from '@ionic/core';
import { ButtonFill } from '../../ui/button/button.component';

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
  @Input() buttonFill:ButtonFill = 'translucent';

  @Output() buttonClick = new EventEmitter();

  @ViewChild('slot') slot:ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit() { }

  onButtonClick() {
    this.buttonClick.emit();
  }

  isButtonEmpty() {
    if(!this.slot?.nativeElement.childNodes) {
      return true;
    }
    else {
      const nodeList = [];
      this.slot.nativeElement.childNodes.forEach(node => {
        if(node.nodeName !== '#comment') {
          nodeList.push(node);
        }
      });
      if(nodeList.length) {
        return false;
      }
      else {
        return true;
      }
    }
  }

  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
}