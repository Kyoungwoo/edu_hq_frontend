import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { QrService } from 'src/app/basic/service/util/qr.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { NfcService } from 'src/app/basic/service/util/nfc.service';
import { ApprovalPopupComponent } from '../member-management/member-approval-wait/approval-popup/approval-popup.component';
import { SecurityPasswordComponent } from '../member-management/member-approval-wait/security-password/security-password.component';
import { PeopleViewComponent } from 'src/app/component/modal/people-view/people-view.component';
import { RiskEvaluationPopupPage } from '../work-plan/risk-assessment/risk-evaluation-popup/risk-evaluation-popup.page';
import { MileagePopupComponent } from '../member-management/member-management/mileage-popup/mileage-popup.component';
import { ActivatedRoute } from '@angular/router';
import { ConfirmSettingPopupComponent } from 'src/app/component/confirm/confirm-setting-popup/confirm-setting-popup.component';
import { ConfirmProcessPopupComponent } from 'src/app/component/confirm/confirm-process-popup/confirm-process-popup.component';
import { ConfirmPopupComponent } from 'src/app/component/confirm/confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-moniter',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit, OnDestroy {
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


  maxIndex = 300;
  graphArrCount =[];
  graphArr = [
    {
      date:'21-01-115471'
    },
    {
      date:'21-01-115471'
    },
    {
      date:'21-01-115471'
    },
    {
      date:'21-01-115471'
    },
    {
      date:'21-01-115471'
    },
    {
      date:'21-01-115471'
    },
    {
      date:'21-01-115471'
    }
]

// graphArr2 = [
//   {
//     name:'작업대기',
//     count:230
//   },
//   {
//     name:'작업중',
//     count:50
//   },
//   {
//     name:'작업종료',
//     count:70
//   }
// ]

// graphArr3 = [
//   {
//     name:'1등급',
//     count:230
//   },
//   {
//     name:'2등급',
//     count:150
//   },
//   {
//     name:'3등급',
//     count:140
//   },
//   {
//     name:'4등급',
//     count:260
//   },
//   {
//     name:'5등급',
//     count:120
//   },
//   {
//     name:'6등급',
//     count:160
//   },
//   {
//     name:'9등급',
//     count:70
//   }
// ]
graphArr2 = [
  {
    name:'전기',
    count:10
  },
  {
    name:'토목',
    count:2
  },
  {
    name:'조경',
    count:3
  },
  {
    name:'건축',
    count:4
  },
  {
    name:'기계',
    count:5
  },
]


graphArr3 = [
  {
    name:'작업전',
    count:10
  },
  {
    name:'작업중',
    count:2
  },
  {
    name:'작업종료',
    count:3
  }
]
graphArr4 = [
  {
    name:'전기',
    count:10
  },
  {
    name:'토목',
    count:2
  },
  {
    name:'조경',
    count:3
  },
  {
    name:'건축',
    count:4
  },
  {
    name:'기계',
    count:5
  },
]


// graph = [
//   { color: '#25A485', name: '작업대기', data: [
//     {value: 20, label: '8시'},
//     {value: 60, label: '9시'},
//     {value: 50, label: '10시'}
//   ]},
//   { color: '#78CE5C', name: '작업중', data: [
//     {value: 30, label: '8시'},
//     {value: 20, label: '9시'},
//     {value: 80, label: '10시'}
//   ]}
// ]

  data = {
    monitor:''
  };
  query:any;
  constructor(
    private connect:ConnectService,
    private qr:QrService,
    private toast:ToastService,
    private nfc : NfcService,
    private modal : ModalController,
    private route: ActivatedRoute
  ) { }
  async ngOnInit() {
    const modal = await this.modal.create({
      component:RiskEvaluationPopupPage,
      // cssClass:"confirm-modal"
    });
    // modal.present();
    // this.graphData()
    // const modal = await this.modal.create({
    //   component:ApprovalPopupComponent,
    //   cssClass:"modal-7"
    // });
    // modal.present();
      
    this.graphData();
    this.getDust();
    this.getWeather();
    this.monitorQuery();
    
    
    setInterval(() => {
      this.getDust();
      this.getWeather();
    },1800000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalWeather);
    clearInterval(this.intervalDust);
    this.query.unsubscribe();
    console.log("파괘");
  }
  ngAfterViewInit() {
    this.data = {
      monitor:'통합관제'
    };
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
  graphData() {
    let index = Math.ceil(this.maxIndex/100);
    console.log("index",index);
    if(this.maxIndex/100 !== 0) {
      for(let i= 0; i<index; i++){
        this.graphArrCount.push(i);
      }
    }
    this.graphArrCount.push(index);
  }
  monitorQuery(){
   this.query =  this.route.queryParams.subscribe(params => {
        this.data = {
          monitor:params.monitor
        }
        console.log(this.data);
      }
    );
  }
}