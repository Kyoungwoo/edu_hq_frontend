import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';

@Component({
  selector: 'app-moniter',
  templateUrl: './moniter.page.html',
  styleUrls: ['./moniter.page.scss'],
})
export class MoniterPage implements OnInit {

  weather:any = {
    weather_speed:"", // 풍속,
    weather_id: "", // 아이디,
    weather_temp:"", // 기온(온도),
    avg_temp:0,// 어제와 오늘의 온도 평균에서 뺀 기온(온도)
    weather_icon:"", // 아이콘,
    create_date:"" ,// 날씨를 부른 시간 3시간 기준입니다,
    weather_main:"", // 날씨 설명,
    weather_humidity:"", // 습도,
    weather_pty :"" // 강수량
  }

  dust:any = {
    dataTime: "",
    grade_name: "",
    icon_url: "",
    pm10Value: 0,
    pm25Grade: 0
  }
  constructor(
    private connect:ConnectService
  ) { }

  ngOnInit() {
    setTimeout(async() => {
      await this.getweaTher();
      this.getDust();
    }, 300);
  }

  async getweaTher() {
    //날씨
    const res = await this.connect.run('/weather/get',null,{});
    switch(res.rsCode) {
      case 0 :
        this.weather = res.rsObj;
      break;
    default:
        this.connect.error("날씨 불러오기 실패",res);
        break;
    }
  }

  async getDust() {
    const res = await this.connect.run('/dust/get',null,{});
    switch(res.rsCode){
      case 0 :
        this.dust = res.rsObj
        break;
      default:
        this.connect.error("미세먼지 실패",res);
        break;
    }

  }
}
