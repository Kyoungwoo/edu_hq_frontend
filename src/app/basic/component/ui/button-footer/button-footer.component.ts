import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-footer',
  templateUrl: './button-footer.component.html',
  styleUrls: ['./button-footer.component.scss']
})
export class ButtonFooterComponent implements OnInit {

  @Input() color:string = "primary";
  @Input() disabled:boolean = false;
  @Input() readonly:boolean = false;

  @HostBinding('style.pointer-events') get classDisabled() { return this.disabled ? "none" : null }

  constructor() { }

  ngOnInit() {}

}
