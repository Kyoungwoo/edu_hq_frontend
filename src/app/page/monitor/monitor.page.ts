import { UserService } from 'src/app/basic/service/core/user.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
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

// 금일 출역 근로자
export class TodayWorkItem {
  company_admin:number // 협력사 관리자 수
  company_worker:number // 협력사 작업자 수
  master_admin:number // 원청사 관리자 수
  master_worker:number // 원청사 작업자 수
  total_cnt:number // 총 인원슈
  work_date:string // 날짜
}

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

  form = {
    project_id: 1,
    master_company_id: 4
  }

  todayWork:ConnectResult<TodayWorkItem>;

  todayWork_totalCount = 0; // 금일 출역 근로자 총 수
  graphLine = []; // 금일 출역 근로자 그래프 단위라인
  ceil_Total = 0; // 금일 출역 근로자 총 수를 올림한 값


  menuCount:Number = 1;
  
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

  intervalWeather_Dust;


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
    private route: ActivatedRoute,
    public user: UserService
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
      
    this.methodContrroller();
  }

  /**
   * @function methodContrroller(): 통합관제 데이터를 모두 불러오는 메서드
   */
   methodContrroller(){
    /**
     * 날씨와 미세먼지는 인터벌이있기때문에 처음에 한번은 불러와줘야합니다.
     * @function this.getDust()
     * @function this.getWeather()
     */
     this.getDust(); // 미세먼지
     this.getWeather(); // 날씨

    this.graphData();
    this.monitorQuery();

    this.IntervalWeather_Dust(); // 날씨 및 미세먼지
    this.getTodayWorker(); // 금일 출역 작업자
  }

  /**
   * @function IntervalWeather_Dust(): 날씨와 미세먼지 데이터를 인터벌 돌리는 메서드
   */
  IntervalWeather_Dust(){
    this.intervalWeather_Dust = setInterval(() => {
      this.getDust();
      this.getWeather();
    },1800000);
  }

  /**
   * @function ngOnDestroy(): 해당 페이지가 없어지면 걸려있던 subscribe 및 interval을 해제해줍니다.
   */
  ngOnDestroy() {
    clearInterval(this.intervalWeather_Dust);
    this.query.unsubscribe();
  }

  ngAfterViewInit() {
    this.data = {
      monitor:'통합관제'
    };
  }

  /**
   * @function getTodayWorker(): 금일 출역 작업자 데이터를 가져오는 메서드
   */
  async getTodayWorker() {
    const res = await this.connect.run('/integrated/today_worker',this.form,{});
    switch(res.rsCode) {
      case 0 :
        console.log(res);
        let total = 0;
        this.todayWork = res;

        this.todayWork.rsMap[0].company_worker = Number(300);
        this.todayWork.rsMap[0].master_worker = Number(200);


        this.todayWork.rsMap[1].company_worker = Number(43);
        this.todayWork.rsMap[1].master_worker = Number(90);

        this.todayWork.rsMap[2].company_worker = Number(111);
        this.todayWork.rsMap[2].master_worker = Number(76);

        this.todayWork.rsMap[3].company_worker = Number(172);
        this.todayWork.rsMap[3].master_worker = Number(222);

        this.todayWork.rsMap[4].company_worker = Number(95);
        this.todayWork.rsMap[4].master_worker = Number(66);

        this.todayWork.rsMap[5].company_worker = Number(1);
        this.todayWork.rsMap[5].master_worker = Number(2);
        
        this.todayWork.rsMap[6].company_worker = Number(7);
        this.todayWork.rsMap[6].master_worker = Number(3);


        
        this.todayWork.rsMap.map((item) => {total = total+item.master_worker+item.company_worker;});
        this.todayWork_totalCount = total;

        let total_arr = [];
        this.todayWork.rsMap.map((item) => {total_arr.push(item.master_worker+item.company_worker);});
        let max_today = Math.max.apply(null,total_arr);

        let lineCount = (Math.ceil(max_today / 100) * 100) * 0.01;
        this.ceil_Total = Math.ceil(max_today / 100) * 100;



        let graph_item = [];
        for(let i = 0; i < lineCount; i++){
          graph_item.push((i+1)*100);
        }

        this.graphLine = graph_item;

        console.log("--------- math 1: ", max_today);
        console.log("--------- math 2: ", this.graphLine);
        console.log("test",this.todayWork);
        break;
    }
  }

  /**
   * @function getWeather(): 날씨 데이터를 가져오는 메서드
   */
  async getWeather() {
    //날씨
    const res = await this.connect.run('/weather/get',null,{});
    switch(res.rsCode) {
      case 0 :
        this.weather = res.rsObj;
        break;
    }
  }

  /**
   * @function getDust(): 미세먼지 데이터를 가져오는 메서드
   */
  async getDust() {
    const res = await this.connect.run('/dust/get',null,{}); 
    switch(res.rsCode) {
      case 0 :
        this.dust = res.rsObj;
        break;
    }
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