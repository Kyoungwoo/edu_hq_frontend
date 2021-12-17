import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-segment',
  templateUrl: './sign-up-segment.component.html',
  styleUrls: ['./sign-up-segment.component.scss'],
})
export class SignUpSegmentComponent implements OnInit {

  @Input() step:'step1' | 'step2' | 'step3' | 'step4';

  constructor() { }

  ngOnInit() {}

}
