import { DateService } from './../../basic/service/util/date.service';
import { TodayDepartureStatusListPage } from './../work-management/departure-status/today-departure-status-list/today-departure-status-list.page';
import { MonitorSmartEquipEditPage } from './monitor-smart-equip-edit/monitor-smart-equip-edit.page';
import { UserService } from 'src/app/basic/service/core/user.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { QrService } from 'src/app/basic/service/util/qr.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { NfcService } from 'src/app/basic/service/util/nfc.service';
import { ActivatedRoute } from '@angular/router';
import { GpsCoordinateData } from 'src/app/basic/component/input/naver-map/naver-map.component';

/**
 * @class TodayConstructionItem
 *  - 금일 출역 근로자 변수 class
 */
export class TodayWorkItem {
  company_admin:number // 협력사 관리자 수
  company_worker:number // 협력사 작업자 수
  master_admin:number // 원청사 관리자 수
  master_worker:number // 원청사 작업자 수
  total_cnt:number // 총 인원슈
  work_date:string // 날짜
}

/**
 * @class TodayConstructionItem
 *  - 공종별 출역인원 변수 class
 */
export class TodayConstructionItem {
  ctgo_construction_name:string // 공종 이름
  cnt:number // 총 인원수
  ctgo_construction_id:number // id
  dump_date:string // 날짜
}

/**
 * @class SmartEquip
 *  - 스마트 안전장비 변수 class
 */
 export class SmartEquip {
  not_using_count:number // 미사용 스마트장비 수
  ctgo_machine_serial_name:string // 스마트장비 이름
  ctgo_machine_serial_id:number // 스마트장비 id
  machine_count:number // 스마트장비 수
  mmachine_using_count:number // 사용중 스마트장비 수
}

export class userData {
 area_bottom_id: number;
 area_middle_id: number;
 area_risk_id: number;
 area_state: string;
 area_top_id: number;
 gps_id: number;
 gps_log_id: number;
 user_id: number;
 user_latitude: number;
 user_longitude: number;
}


@Component({
  selector: 'app-moniter',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit, OnDestroy {

  menu: number = 1;
  
  form = {
    project_id: 1,
    master_company_id: 4,
    company_id: 0, // 회사 ID
    ctgo_construction_id: 0, // 공종 ID
    search_text: '', // 검색어
    user_type: '전체' // 근로자 구분 관리자 OR 작업자 OR 전체
  }

  todayWork:ConnectResult<TodayWorkItem>;
  todayWork_totalCount = 0; // 금일 출역 근로자 총 수
  todayWork_graphLine = []; // 금일 출역 근로자 그래프 단위라인
  todayWork_ceil_Total = 0; // 금일 출역 근로자 총 수를 올림한 값

  todayConstruction:ConnectResult<TodayConstructionItem>;
  todayConstruction_totalCount = 0; // 금일 출역 근로자 총 수
  todayConstruction_graphLine = []; // 금일 출역 근로자 그래프 단위라인
  todayConstruction_ceil_Total = 0; // 금일 출역 근로자 총 수를 올림한 값

  smartEquip:ConnectResult<SmartEquip>;

  //  구조물 변위 감지
  smartEquip_structure = {
    not_using_count: 0, // 미사용 스마트장비 수
    ctgo_machine_serial_name: '구조물 변위 감지', // 스마트장비 이름
    ctgo_machine_serial_id: 0, // 스마트장비 id
    machine_count: 0, // 스마트장비 수
    mmachine_using_count: 0 // 사용중 스마트장비 수
  } 

  //  크레인 상하차 감지
  smartEquip_crane = {
    not_using_count: 0, // 미사용 스마트장비 수
    ctgo_machine_serial_name: '크레인 상하차 감지', // 스마트장비 이름
    ctgo_machine_serial_id: 0, // 스마트장비 id
    machine_count: 0, // 스마트장비 수
    mmachine_using_count: 0 // 사용중 스마트장비 수
  } 
  //  밀폐공간 유해물질 감지
  smartEquip_closeness = {
    not_using_count: 0, // 미사용 스마트장비 수
    ctgo_machine_serial_name: '밀폐공간 유해물질 감지', // 스마트장비 이름
    ctgo_machine_serial_id: 0, // 스마트장비 id
    machine_count: 0, // 스마트장비 수
    mmachine_using_count: 0 // 사용중 스마트장비 수
  } 


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


graphArr3 = [
  {
    name:'작업전',
    count:10,
    color: 'warning'
  },
  {
    name:'작업중',
    count:2,
    color: 'green'
  },
  {
    name:'작업종료',
    count:3,
    color: 'red'
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

workerInRes:ConnectResult<{
  ctgo_construction_id: number,
  user_type: string,
  company_id: number,
  user_id: number,
  user_name: string,
  company_name: string,
  ctgo_construction_name: string,
  row_count:number
}>

gpsData:ConnectResult<userData>

gps_log_id = [];
gps_log_data = new GpsCoordinateData();
// testData = {
//   gps_latitude:[127.105399,127.2715984,127.1809612], // x, 위도
//   gps_longitude:[37.3595704,37.5398721,37.5660017]// y, 경도
// }

  data = {
    monitor:'통합관제'
  };

  query:any;
  constructor(
    private connect:ConnectService,
    private qr:QrService,
    private toast:ToastService,
    private nfc : NfcService,
    private modal : ModalController,
    private route: ActivatedRoute,
    public user: UserService,
    public date: DateService
  ) { }

  ngOnInit() {
    this.intervalMethodController();
    this.methodContrroller();
    // const modal = await this.modal.create({
    //   component:RiskEvaluationPopupPage,
    //   // cssClass:"confirm-modal"
    // });
    // modal.present();
    // this.graphData()
    // const modal = await this.modal.create({
      //   component:ApprovalPopupComponent,
      //   cssClass:"modal-7"
      // });
      // modal.present();
  }

  /**
   * @function methodContrroller(): 통합관제 데이터를 모두 불러오는 메서드(인터벌이 들어가있는 메서드 제외)
   */
   methodContrroller(){
    this.monitorQuery();
    this.wokerInGetList();
    this.gpsGet();//근로자 gps
    this.getTodayWorker(); // 금일 출역 작업자
    this.getTodayConstruction(); // 공종별 출역 작업자
    this.getSmartEquip() // 스마트 안전장비 
  }

  /**
   * @function intervalMethodController(): 인터벌이 포함되어있는 메서드를
   */
  intervalMethodController(){
    this.IntervalWeather_Dust(); // 날씨 및 미세먼지
    /**
     * 날씨와 미세먼지는 인터벌이있기때문에 처음에 한번은 불러와줘야합니다.
     * @function this.getDust()
     * @function this.getWeather()
     */
    this.getDust(); // 미세먼지
    this.getWeather(); // 날씨
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

        // theme
        // this.todayWork.rsMap[0].company_worker = Number(300);
        // this.todayWork.rsMap[0].master_worker = Number(200);


        // this.todayWork.rsMap[1].company_worker = Number(43);
        // this.todayWork.rsMap[1].master_worker = Number(90);

        // this.todayWork.rsMap[2].company_worker = Number(111);
        // this.todayWork.rsMap[2].master_worker = Number(76);

        // this.todayWork.rsMap[3].company_worker = Number(172);
        // this.todayWork.rsMap[3].master_worker = Number(222);

        // this.todayWork.rsMap[4].company_worker = Number(95);
        // this.todayWork.rsMap[4].master_worker = Number(66);

        // this.todayWork.rsMap[5].company_worker = Number(1);
        // this.todayWork.rsMap[5].master_worker = Number(2);
        
        // this.todayWork.rsMap[6].company_worker = Number(7);
        // this.todayWork.rsMap[6].master_worker = Number(3);

        
        this.todayWork.rsMap.map((item) => {total = total+item.master_worker+item.company_worker;});
        this.todayWork_totalCount = total;

        let total_arr = [];
        this.todayWork.rsMap.map((item) => {total_arr.push(item.master_worker+item.company_worker);});
        let max_today = Math.max.apply(null,total_arr);

        let lineCount = (Math.ceil(max_today / 100) * 100) * 0.01;
        this.todayWork_ceil_Total = Math.ceil(max_today / 100) * 100;



        let graph_item = [];
        for(let i = 0; i < lineCount; i++){
          graph_item.push((i+1)*100);
        }

        this.todayWork_graphLine = graph_item;
        break;
    }
  }

  /**
   * @function getTodayConstruction(): 공종별 출역 작업자 데이터를 가져오는 메서드
   */
   async getTodayConstruction() {
    const res = await this.connect.run('/integrated/construction_worker',this.form,{});
    switch(res.rsCode) {
      case 0 :
        let total = 0;
        this.todayConstruction = res;

        // theme
        // this.todayConstruction.rsMap[0].cnt = Number(66);
        // this.todayConstruction.rsMap[1].cnt = Number(55);
        // this.todayConstruction.rsMap[2].cnt = Number(43);
        // this.todayConstruction.rsMap[3].cnt = Number(88);
        // this.todayConstruction.rsMap[4].cnt = Number(44);
        // this.todayConstruction.rsMap[5].cnt = Number(11);
        // this.todayConstruction.rsMap[6].cnt = Number(33);
        // this.todayConstruction.rsMap[7].cnt = Number(22);
        // this.todayConstruction.rsMap[8].cnt = Number(77);

        
        this.todayConstruction.rsMap.map((item) => {total = total+item.cnt;});
        this.todayConstruction_totalCount = total;

        let total_arr = [];
        this.todayConstruction.rsMap.map((item) => {total_arr.push(item.cnt);});
        let max_today = Math.max.apply(null,total_arr);

        this.todayConstruction_ceil_Total = Math.ceil(max_today / 10) * 10;
        break;
    }
  }

  /**
   * @function getSmartEquip(): 스마트장비 데이터를 가져오는 메서드
   */
   async getSmartEquip() {
     // this.form
    const res = await this.connect.run('/integrated/smart_equip',{project_id:1, master_company_id:1},{});
    switch(res.rsCode) {
      case 0 :
        this.smartEquip = res;

        this.smartEquip.rsMap.map((item) => {
          if(item.ctgo_machine_serial_id == 8){
            this.smartEquip_structure = item;
            this.smartEquip_structure.ctgo_machine_serial_name = '구조물 변위 감지'
          }

          if(item.ctgo_machine_serial_id == 4){
            this.smartEquip_crane = item;
            this.smartEquip_crane.ctgo_machine_serial_name = '크레인 상하차 감지'
          }

          if(item.ctgo_machine_serial_id == 7){
            this.smartEquip_closeness = item;
            this.smartEquip_closeness.ctgo_machine_serial_name = '밀폐공간 유해물질 감지'
          }
        });
        break;
    }
  }

  /**
   * @function smartEquipEdit(): 스마트 안전장비 가동중 수정 모달입니다.
   */
  async smartEquipEdit() {
    const modal = await this.modal.create({
      component:MonitorSmartEquipEditPage,
      componentProps:{

      }
    });
    modal.present();
  }

  /**
   * @function todayWorkDetail(): 금일 출역 작업자 모달입니다.
   */
  async todayWorkDetail(item) {
    let trnas_item = item;
    trnas_item.row_count = 0;
    const modal = await this.modal.create({
      component: TodayDepartureStatusListPage,
      cssClass: 'today-departure-status-list-modal',
      componentProps:{
        listForm: {
          project_id: this.form.project_id,
          master_company_id: this.form.master_company_id,
          ctgo_construction_ids: [],
          start_date: '',
          end_date: '',
          limit_no: 0
        },
        item: trnas_item
      }
    });

    modal.present();
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

  // graphData() {
  //   let index = Math.ceil(this.maxIndex/100);
  //   console.log("index",index);
  //   if(this.maxIndex/100 !== 0) {
  //     for(let i= 0; i<index; i++){
  //       this.graphArrCount.push(i);
  //     }
  //   }
  //   this.graphArrCount.push(index);
  // }
  monitorQuery(){
   this.query =  this.route.queryParams.subscribe(params => {
        this.data = {
          monitor:params.monitor
        }
      }
    );
  }

  async wokerInGetList() {
    this.workerInRes = await this.connect.run('/integrated/worker/in/list',this.form);
    if(this.workerInRes.rsCode !== 0) {
      this.toast.present({message:this.workerInRes.rsMsg, color:'warning'});
    }
  }


  async gpsGet() {
    const res = await this.connect.run('/integrated/gps/log',this.form);
    if(res.rsCode === 0) {
      this.gpsData = res
      console.log("this.gpsData",this.gpsData);
      
    } else {
      this.toast.present({message:res.rsMsg, color:'warning'});
    }
  }

  test(ev) {
    console.log("ev",ev);
  }

  style(item) {
    let style;
    switch(item.name) { 
      case '작업전':
        style = {'background-color':'var(--ion-color-warning)'}
      break;
      case '작업중':
        style = {'background-color':'var(--ion-color-primary)'}
      break;
      case '작업종료':
        style = {'background-color':'var(--ion-color-secondary)'}
      break;
    }
    return style
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