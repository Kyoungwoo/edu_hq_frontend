import { Component, Input, OnInit } from '@angular/core';

export type SafetyStateType = "회의 전" | "회의 중" | "회의 종료";

@Component({
  selector: 'chip-safety-state',
  templateUrl: './chip-safety-state.component.html',
  styleUrls: ['./chip-safety-state.component.scss'],
})
export class ChipSafetyStateComponent implements OnInit {
  @Input() safety_meeting_state:SafetyStateType

  constructor() { }

  ngOnInit() {}

}
