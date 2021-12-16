import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
<<<<<<< HEAD
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { DaumService } from 'src/app/basic/service/util/daum.service';
import { QrService } from 'src/app/basic/service/util/qr.service';
=======
import { SearchDangerousAreaComponent } from 'src/app/component/modal/search-dangerous-area/search-dangerous-area.component';
import { SearchCompanyComponent } from 'src/app/component/modal/search-company/search-company.component';
>>>>>>> b6c349031e27c4b23202eee8819502e58cfcdb74
import { SearchPeopleComponent } from 'src/app/component/modal/search-people/search-people.component';
import { SearchHeavyComponent } from 'src/app/component/modal/search-heavy/search-heavy.component';
import { SearchSceneComponent } from 'src/app/component/modal/search-scene/search-scene.component';
import { SearchToolComponent } from 'src/app/component/modal/search-tool/search-tool.component';
import { SearchConstructionMachineryComponent } from 'src/app/component/modal/search-construction-machinery/search-construction-machinery.component';
import { SearchEducationComponent } from 'src/app/component/modal/search-education/search-education.component';

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

  intervalWeather;
  intervalDust;

  constructor(
    private connect:ConnectService,
    private modal : ModalController,
    private qr:QrService,
    private daum:DaumService,
    private nav:NavService
    
  ) { }

  async ngOnInit() {
<<<<<<< HEAD
=======
    const modal = await this.modal.create({
      component:SearchEducationComponent
    });
    modal.present();
>>>>>>> b6c349031e27c4b23202eee8819502e58cfcdb74

    this.getDust()
    this.getWeather()
    
    setInterval(()=>{
      this.getDust();
      this.getWeather();
    },1800000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalWeather);
    clearInterval(this.intervalDust);
  }

  test(){
    this.qr.present();
  }

  // async getWeatherGroup() {
    // const resultDust = await Promise.all([
    //   this.getDust()
    // ])
    // const resultWeather = await Promise.all([
    //   this.getWeather()
    // ])


    // const weatherResult = resultWeather[0];
    // const DustResult = resultDust[0];
    // console.log("DustResult",DustResult)

    // const timeDiffweather = new Date().getTime() - new Date(weatherResult.rsObj.create_date).getTime();
    // const timeDiffDust = new Date().getTime() - new Date(DustResult.rsObj.dataTime).getTime();

    // this.timeoutWeather = setTimeout(async() => {
    //   this.getWeatherGroup();
    // }, (1000 * 60 * 60 * 3.1) - timeDiffweather);

    // this.timeoutDust = setTimeout(async() => {
    //   this.getWeatherGroup();
    // }, (1000 * 60 * 60 * 1.1) - timeDiffDust);
  // }

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
}

// ngOnInit() {
//   const $qr = this.qr.subscribe((data) => { // => qr이 켜짐
//     if(!data?.user_id) return this.toast.present({ message: 'qr을 다시 스캔해주세요.' });
//     const res = await this.connect.run('/user/user_in/qr', { user_id: data.user_id });
//     if(res.code === 0) {
//       $qr.unsubscribe(); // => qr이 꺼짐. subscribe가 unsubscribe 됨
//     } else {
//       this.connect.error(res);
//     }
//   });
// }

