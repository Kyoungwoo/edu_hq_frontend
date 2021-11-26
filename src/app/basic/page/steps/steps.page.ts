import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
})
export class StepsPage implements OnInit {

  nav = '';

  
  steps = [
    {
      number: 1,
      text: '회원유형 선택',
      check: true
    },
    {
      number: 2,
      text: '기본정보 입력',
      check: true
    },

    {
      number: 3,
      text: '건강문진 작성',
      check: true
    },
    {
      number: 3,
      text: '약관동의',
      check: true
    },
    {
      number: 3,
      text: '가입완료',
      check: true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  check(item){
    if(item.check) {
      item.check = false;
    } else {
      item.check = true;
    }
  }
}
