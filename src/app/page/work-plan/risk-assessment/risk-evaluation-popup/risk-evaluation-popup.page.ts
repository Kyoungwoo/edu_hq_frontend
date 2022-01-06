import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-evaluation-popup',
  templateUrl: './risk-evaluation-popup.page.html',
  styleUrls: ['./risk-evaluation-popup.page.scss'],
})
export class RiskEvaluationPopupPage implements OnInit {

  menuCount:Number = 1;
  list=
  [
    {
      checked:false,
      text:'기초 파일 공사'
    },
    {
      checked:false,
      text:'굴착 및 되메움 공사'
    },
    {
      checked:false,
      text:'매립 공사'
    },
    {
      checked:false,
      text:'절토성토 공사'
    },
    {
      checked:false,
      text:'벌개제근 및 표토제거 공사'
    },
    {
      checked:false,
      text:'발파 공사'
    },
    {
      checked:false,
      text:'흙막이 공사(Strut)'
    },
    {
      checked:false,
      text:'흙막이 공사(E/A)'
    },
    {
      checked:false,
      text:'흙막이 공사(C.I.P)'
    },
  ]

  list1=
  [
    {
      checked:false,
      text:'장비반입/작업준비'
    },
    {
      checked:false,
      text:'쇄암'
    },
    {
      checked:false,
      text:'준설토 선적'
    },
    {
      checked:false,
      text:'준설토 운반'
    },
    {
      checked:false,
      text:'상차 및 덤프 운반'
    },
    {
      checked:false,
      text:'하역 및 매립'
    },
    {
      checked:false,
      text:'지반정리/정리정돈'
    },
  ]
  list2=
  [
    {
      checked:false,
      text:'직접입력',
      src:'assets/basic/img/plus.svg'
    },
    {
      checked:false,
      text:'장비 후진시 유도자 미배치로 인한 충돌'
    },
    {
      checked:false,
      text:'차량운행 경로 미지정으로 인한 차량 충돌 사고'
    },
    {
      checked:false,
      text:'외부인 출입에 의한 사고'
    },
  ]
  list3=
  [
    {
      checked:false,
      text:'차량 운행경로에 유도원 2명이상 배치'
    },
    {
      checked:false,
      text:'지게차 이동 동선에 자재 적재, 타 작업 등의 확인 점검'
    },
    {
      checked:false,
      text:'장비 작업계획서 차량운행 경로 확인후 작업 지시'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
