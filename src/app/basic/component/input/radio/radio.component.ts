import { Component, forwardRef, HostListener, Inject, Input, OnInit, Optional } from '@angular/core';
import { RadioGroupComponent } from '../radio-group/radio-group.component';
import { RadioInputComponent } from '../radio-input/radio-input.component';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {

  @HostListener('click') onClick() {
    if(this.radioInput) this.radioInput.value = this.value;
    if(this.RadioGroup) this.RadioGroup.value = this.value;
  }

  @Input() value:any;

  constructor(
    @Optional() private radioInput:RadioInputComponent,
    @Optional() private RadioGroup:RadioGroupComponent
  ) { }

  ngOnInit() {
    
  }
}
