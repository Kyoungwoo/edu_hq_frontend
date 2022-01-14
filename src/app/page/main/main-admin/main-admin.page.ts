import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.page.html',
  styleUrls: ['./main-admin.page.scss'],
})
export class MainAdminPage implements OnInit {

  weather:any = {
    weather_speed:"", // 풍속,
    weather_id: "", // 아이디,
    weather_temp:"", // 기온(온도),
    avg_temp:0,// 어제와 오늘의 온도 평균에서 뺀 기온(온도)
    weather_icon:"", // 아이콘,
    create_date:"" ,// 날씨를 부른 시간 3시간 기준입니다,
    weather_main:"", // 날씨 설명,
    weather_humidity:"", // 습도,
    weather_rain:"", // 강수량 :"", // 강수량
    weather_snow:"", // 적설량},
    high_weather_temp:"", // 최고 기온(온도),
    low_weather_temp:"" // 최저 기온(온도),
  }
  dust:any = {
    dataTime: "",
    grade_name: "",
    icon_url: "",
  pm10Value: 0,
    pm25Grade: 0
  }
  constructor(
    private connect:ConnectService,
    private alert : AlertService,
    private nav:NavService
  ) { }

  ngOnInit() {
    this.getDust();
    this.getWeather();
    
    
    setInterval(() => {
      this.getDust();
      this.getWeather();
    },1800000);
  }

  async getWeather() {
    //날씨
    const res = await this.connect.run('/weather/get',null,{});
    switch(res.rsCode) {
      case 0 :
        this.weather = res.rsObj;
    }
  }

  async getDust() {
    const res = await this.connect.run('/dust/get',null,{}); 
    switch(res.rsCode) {
      case 0 :
        this.dust = res.rsObj;
    }
  }
  alram() {
  }
  router(title:string) {
    console.log("asdfasdf");
    switch(title){
      case '알림함':
        this.alert.present({
          message:  '<img src="https://www.devmonster.co.kr/assets/img/logo.svg">',
          header:'준비중'
        });      
        break;
      case '미결함':
        this.nav.navigateRoot('/confirm-pending-list');
        break;
      case '공지사항':
        this.nav.navigateRoot('/notice-list');
        break;
      case '회의록':
        this.nav.navigateRoot('/minutes-list');
        break;
      case '아차사고신고':
        this.alert.present({
          message:  '<img src="https://www.devmonster.co.kr/assets/img/logo.svg">',
          header:'준비중'
        });
        break;
    }
  }
}
