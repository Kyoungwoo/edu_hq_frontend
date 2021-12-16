import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { SearchPeopleComponent } from 'src/app/component/modal/search-people/search-people.component';

@Component({
  selector: 'app-moniter',
  templateUrl: './moniter.page.html',
  styleUrls: ['./moniter.page.scss'],
})
export class MoniterPage implements OnInit, OnDestroy {

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

  timeoutWeather;

  constructor(
    private connect:ConnectService,
    private modal : ModalController
  ) { }

  async ngOnInit() {
    this.getWeatherGroup();
    const modal = await this.modal.create({
      component:SearchPeopleComponent
    });
    modal.present();
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutWeather);
  }

  async getWeatherGroup() {
    const resultList = await Promise.all([
      this.getWeather(),
      this.getDust()
    ])

    const weatherResult = resultList[0];
    const timeDiff = new Date().getTime() - new Date(weatherResult.rsObj.create_date).getTime();

    this.timeoutWeather = setTimeout(async() => {
      this.getWeatherGroup();
    }, (1000 * 60 * 60 * 3.1) - timeDiff);
  }

  async getWeather() {
    //날씨
    return await this.connect.run('/weather/get',null,{});
  }

  async getDust() {
    return await this.connect.run('/dust/get',null,{});
  }
}
