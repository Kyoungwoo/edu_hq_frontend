import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fadeAnimation } from '../../app.animation';
import { NaverMapComponent } from '../../component/input/naver-map/naver-map.component';
import { DaumService } from '../../service/daum.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.page.html',
  styleUrls: ['./steps.page.scss'],
  animations: [ fadeAnimation ]
})
export class StepsPage implements OnInit {

  fadeAnimationToggle:boolean = false;
  nav = [
    {y:36.9845136,x:126.626467},
    {y:36.8560585,x:126.442446},
    {y:36.8307812,x:126.8077414},
  ];


//   x: 126.626467
// y: 36.9845136
  

// x: 126.442446
// y: 36.8560585

// x: 126.8077414
// y: 36.8307812
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
  // distributionUrl=https\://services.gradle.org/distributions/gradle-7.0-all.zip

  constructor(
    private modal : ModalController,
    private daum : DaumService
  ) { }

  ngOnInit() {
  }

  check(item){
    if(item.check) {
      item.check = false;
    } else {
      item.check = true;
    }
  }
  async addresss(){
    const daum = await this.daum.present();

  }
}
