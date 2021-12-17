import { Component, HostBinding, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-template',
  templateUrl: './input-template.component.html',
  styleUrls: ['./input-template.component.scss'],
})
export class InputTemplateComponent implements OnInit {

  @HostBinding('class.input-label') get classLabel() { return this.label }
  @HostBinding('class.input-no-label') get classNoLabel() { return !this.label }
  @Input() label:string;

  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onButtonClick() {
    this.buttonClick.emit();
  }

  @HostBinding('class.readonly') get classReadonly() { return this.readonly }
  @HostBinding('class.disabled') get classDisabled() { return this.disabled }
  @Input() readonly:boolean = false;
  @Input() disabled:boolean = false;
  @Input() required:boolean = false;
}