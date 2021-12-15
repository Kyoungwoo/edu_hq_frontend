import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';

@Component({
  selector: 'app-moniter',
  templateUrl: './moniter.page.html',
  styleUrls: ['./moniter.page.scss'],
})
export class MoniterPage implements OnInit {

  // wether= {
  //   weather_speed:1.5, // 풍속,
  //   weather_id: 202112140000, // 아이디,
  //   weather_temp:3, // 기온(온도),
  //   avg_temp:-13.5,// 어제와 오늘의 온도 평균에서 뺀 기온(온도)
  //   weather_icon:“https://cdn.lh-skeeper.or.kr/files/api/weather_icon/11_night.svg” // 아이콘,
  //   create_date: “2021-12-14 23:59:35” // 날씨를 부른 시간 3시간 기준입니다,
  //   weather_main:“흐림” // 날씨 설명,
  //   weather_humidity:“70” // 습도,
  //    weather_pty :“0” // 강수량
  // }
  constructor(
    private connect:ConnectService
  ) { }

  async ngOnInit() {
    //날씨
    const res = await this.connect.run('/weather/get',null,{loading:'로딩중'});

  }
}
