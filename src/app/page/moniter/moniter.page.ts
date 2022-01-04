import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { SearchDangerousAreaComponent } from 'src/app/component/modal/search-dangerous-area/search-dangerous-area.component';
import { SearchCompanyComponent } from 'src/app/component/modal/search-company/search-company.component';
import { SearchPeopleComponent } from 'src/app/component/modal/search-people/search-people.component';
import { SearchHeavyComponent } from 'src/app/component/modal/search-heavy/search-heavy.component';
import { SearchSceneComponent } from 'src/app/component/modal/search-scene/search-scene.component';
import { SearchToolComponent } from 'src/app/component/modal/search-tool/search-tool.component';
import { SearchConstructionMachineryComponent } from 'src/app/component/modal/search-construction-machinery/search-construction-machinery.component';
import { SearchEducationComponent } from 'src/app/component/modal/search-education/search-education.component';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { DaumService } from 'src/app/basic/service/util/daum.service';
import { QrService } from 'src/app/basic/service/util/qr.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PeopleViewComponent } from 'src/app/component/modal/people-view/people-view.component';
import { PeopleDeleteComponent } from 'src/app/component/modal/people-delete/people-delete.component';
import { SearchAreaComponent } from 'src/app/component/modal/search-area/search-area.component';
import { SelectToolComponent } from 'src/app/component/select/select-tool/select-tool.component';
import { SelectHeavyComponent } from 'src/app/component/select/select-heavy/select-heavy.component';
import { SelectEducationComponent } from 'src/app/component/select/select-education/select-education.component';
import { SelectCompanyComponent } from 'src/app/component/select/select-company/select-company.component';
import { SelectSceneComponent } from 'src/app/component/select/select-scene/select-scene.component';
import { SelectPeopleComponent } from 'src/app/component/select/select-people/select-people.component';
import { SelectBusinessComponent } from 'src/app/component/select/select-business/select-business.component';
import { SelectSafetymanagerComponent } from 'src/app/component/select/select-safetymanager/select-safetymanager.component';
import { SelectConstructionComponent } from 'src/app/component/select/select-construction/select-construction.component';
import { SelectOccupationComponent } from 'src/app/component/select/select-occupation/select-occupation.component';
import { SelectPositionComponent } from 'src/app/component/select/select-position/select-position.component';
import { SelectOrganizationComponent } from 'src/app/component/select/select-organization/select-organization.component';
import { SelectCountryComponent } from 'src/app/component/select/select-country/select-country.component';
import { ConfirmProcessPopupComponent } from 'src/app/component/confirm/confirm-process-popup/confirm-process-popup.component';
import { NfcService } from 'src/app/basic/service/util/nfc.service';
import { NfcPage } from '../nfc/nfc.page';
import { NfcComponent } from 'src/app/basic/component/dialog/nfc/nfc.component';
import { ConfirmPopupComponent } from 'src/app/component/confirm/confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-moniter',
  templateUrl: './moniter.page.html',
  styleUrls: ['./moniter.page.scss'],
})
export class MoniterPage implements OnInit, OnDestroy {
  // theme_1 = [
  //   {qwe_id:1, qwe_name:"test_1"},
  //   {qwe_id:2, qwe_name:"test_2"},
  //   {qwe_id:3, qwe_name:"test_3"},
  // ]

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

  scandata = "http://m.site.naver.com/0TGMk"

  intervalWeather;
  intervalDust;

  constructor(
    private connect:ConnectService,
    private qr:QrService,
    private toast:ToastService,
    private nfc : NfcService,
    private modal : ModalController
  ) { }

  async ngOnInit() {
    const modal = await this.modal.create({
      component:ConfirmPopupComponent
    });
    modal.present();


    this.getDust();
    this.getWeather();
    
    setInterval(() => {
      this.getDust();
      this.getWeather();
    },1800000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalWeather);
    clearInterval(this.intervalDust);
  }

  test(){
    // this.qr.subscribe
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
  async qrScanStart(){
      const qr = await this.qr.subscribe(async (data) => { // => qr이 켜짐
        alert(data.qr_data);
      if(data) return this.toast.present({ message: 'qr을 다시 스캔해주세요.'});
      const res = await this.connect.run('/user/user_in/qr', { user_id: data.user_id });
      if(res.rsCode === 0) {
        qr.unsubscribe();
      } else {
        this.connect.error('asdf',res);
      }
    });
  }

  async nfcScanStart() {
    const $nfc = await this.nfc.subscribe(async (data) => {
      console.log("data",data.qr_data);
      const res = await this.connect.run('/user/user_in/nfc',{user_id:data.user_id});
      if(data) {
        console.log("test");
        $nfc.unsubscribe();
      } else { 
        this.connect.error('asdf',res);
      }
    });
  }
}