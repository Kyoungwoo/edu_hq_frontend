import { MonitorCctvListPage, CCTVInfo } from './monitor-cctv-list/monitor-cctv-list.page';
import { DateService } from './../../basic/service/util/date.service';
import { TodayDepartureStatusListPage } from './../work-management/departure-status/today-departure-status-list/today-departure-status-list.page';
import { MonitorSmartEquipEditPage } from './monitor-smart-equip-edit/monitor-smart-equip-edit.page';
import { UserService } from 'src/app/basic/service/core/user.service';
import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, ViewDidEnter } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

declare var Hls:any;

// import * as rtsp from 'rtsp_player';
// import * as streamedian from 'streamedian/player.js';
// declare var Streamedian:any;

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


@Component({
  selector: 'app-moniter',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage implements OnInit, OnDestroy {
  
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

  weather: any = {
    weather_speed: "", // 풍속,
    weather_id: "", // 아이디,
    weather_temp: "", // 기온(온도),
    avg_temp: 0,// 어제와 오늘의 온도 평균에서 뺀 기온(온도)
    weather_icon: "", // 아이콘,
    create_date: "",// 날씨를 부른 시간 3시간 기준입니다,
    weather_main: "", // 날씨 설명,
    weather_humidity: "", // 습도,
    weather_rain: "", // 강수량 :"", // 강수량
    weather_snow: "", // 적설량},
    high_weather_temp: "", // 최고 기온(온도),
    low_weather_temp: "" // 최저 기온(온도),
  }
  dust: any = {
    dataTime: "",
    grade_name: "",
    icon_url: "",
    pm10Value: 0,
    pm25Grade: 0
  }
  // scandata = "http://m.site.naver.com/0TGMk"

  // maxIndex = 300;


  graphArr3 = [
    {
      name:'작업전',
      count:0,
    },
    {
      name:'작업중',
      count:0,
    },
    {
      name:'작업종료',
      count:0,
    }
  ]
  graphArr4 = [
    {
      name:'고소 작업(높이 2m 이상)',
      count:0
    },
    {
      name:'굴착 가설(깊이 1.5m 이상)',
      count:0
    },
    {
      name:'기설 구조물 설치 해제',
      count:0
    },
    {
      name:'밀폐공간',
      count:0
    },
    {
      name:'휴일작업',
      count:0
    },
  ]

  data = {
    monitor:'통합관제'
  };

  $activedRoute:Subscription;

  event = {
    get: null,
    change_project: null
  }

  // cctv_form = {
  //   project_id: this.user.userData.belong_data.project_id,
  //   master_company_id: this.user.userData.belong_data.master_company_id ? this.user.userData.belong_data.master_company_id : 0,
  //   search_text: '',
  //   limit_no: 0
  // }
  cctv = [];// :ConnectResult<CCTVInfo>;
  // @ViewChild('video', {static: true}) video_list: ElementRef;

  // test_url = encodeURIComponent('rtsp://admin:qwert12@61.83.219.219:554/main/ch1');
  constructor(
    private connect:ConnectService,
    private toast:ToastService,
    private modal : ModalController,
    private route: ActivatedRoute,
    public user: UserService,
    public date: DateService
  ) {}

  async ngOnInit() {
    // let mediaElement = streamedian.rtsp.attach(document.getElementById('test_video'));
    // streamedian.player(document.getElementById('test_video'));
    // console.log();
    // console.log("mediaElement ----- ", mediaElement);
    // setTimeout(() => {
    //   this.init_api();
    // },2000);
    // await this.testMethod();
    await this.getForm();
    await this.getSence();
    
    

    this.$activedRoute =  this.route.queryParams.subscribe(params => {
      const { monitor } = params;
      this.data = {
        monitor: monitor || '통합관제'
      }
    });

    // event 물리기
    this.event.get = this.monitorCctvList.bind(this);
    window.addEventListener('cctvList:get()', this.event.get);
    this.methodContrroller();

    
    this.event.change_project = window.addEventListener('change_project:get()', (ev:CustomEvent<{project_id:number}>) => {
      console.log('addEventListener - ',ev);
      this.form.project_id = ev.detail.project_id;
    });
  }

  /**
   * @function ngOnDestroy(): 해당 페이지가 없어지면 걸려있던 subscribe 및 interval을 해제해줍니다.
   */
  ngOnDestroy() {
    this.$activedRoute.unsubscribe();
    window.removeEventListener('cctvList:get()', this.event.get);
    window.removeEventListener('change_project:get()', this.event.change_project);
  }

  async getForm() {
    const { belong_data } = this.user.userData;
    console.log('getForm = ',belong_data.master_company_id);
    this.form.project_id = belong_data.project_id;
    this.form.master_company_id = belong_data.master_company_id | 0;
    this.form.company_id = belong_data.company_id;
  }
  formChange(newForm) {
    this.form.project_id = newForm.project_id;
    this.form.master_company_id = newForm.master_company_id | 0;
    this.methodContrroller();
  }

  /**
   * @function methodContrroller(): 통합관제 데이터를 모두 불러오는 메서드(인터벌이 들어가있는 메서드 제외)
   */
  methodContrroller() {
    this.getTodayWorker(); // 금일 출역 작업자
    this.getTodayConstruction(); // 공종별 출역 작업자
    this.getSmartEquip() // 스마트 안전장비 
    this.getWeather(); // 날씨정보
    this.getDust(); // 미세먼지 정보
  }

  /**
   * @function getTodayWorker(): 금일 출역 작업자 데이터를 가져오는 메서드
   */
  async getTodayWorker() {
    const res = await this.connect.run('/integrated/today_worker', this.form, {});
    switch(res.rsCode) {
      case 0 :
        let total = 0;
        this.todayWork = res;
        
        this.todayWork.rsMap.map((item) => {total = total+item.total_cnt;});
        this.todayWork_totalCount = total;

        let total_arr = [];
        this.todayWork.rsMap.map((item) => {total_arr.push(item.total_cnt);});
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
     
    const res = await this.connect.run('/integrated/smart_equip',this.form,{});
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
      default:
        this.smartEquip_structure.not_using_count = 0;
        this.smartEquip_structure.machine_count = 0;
        this.smartEquip_structure.mmachine_using_count = 0;

        this.smartEquip_closeness.not_using_count = 0;
        this.smartEquip_closeness.machine_count = 0;
        this.smartEquip_closeness.mmachine_using_count = 0;

        this.smartEquip_crane.not_using_count = 0;
        this.smartEquip_crane.machine_count = 0;
        this.smartEquip_crane.mmachine_using_count = 0;
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
        item: this.form
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    this.getSmartEquip();
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

  async getWeather() {
    //날씨
    const res = await this.connect.run('/weather/get', null, {});
    switch (res.rsCode) {
      case 0:
        this.weather = res.rsObj;
        break;
    }
  }
  
  async getDust() {
    const res = await this.connect.run('/dust/get', null, {});
    switch (res.rsCode) {
      case 0:
        this.dust = res.rsObj;
        break;
    }
  }

  style(item) {
    let style;
    switch(item.name) { 
      case '작업전':
        style = {'background-color':'var(--ion-color-monitor-yellow)'}
      break;
      case '작업중':
        style = {'background-color':'var(--ion-color-primary)'}
      break;
      case '작업종료':
        style = {'background-color':'var(--ion-color-tertiary)'}
      break;
      case '고소 작업(높이 2m 이상)':
        style = {'background-color':'var(--ion-color-monitor-yellow)'}
      break;
      case '굴착 가설(깊이 1.5m 이상)':
        style = {'background-color':'var(--ion-color-monitor-green)'}
      break;
      case '기설 구조물 설치 해제':
        style = {'background-color':'var(--ion-color-primary)'}
      break;
      case '밀폐공간':
        style = {'background-color':'var(--ion-color-tertiary)'}
      break;
      case '휴일작업':
        style = {'background-color':'var(--ion-color-fourth)'}
      break;
      
    }
    return style
  }

  /**
   * @function monitorCctvList(): CCTV 목록 리스트 모달
   */
   async monitorCctvList() {
    const modal = await this.modal.create({
      // component:MonitorSmartEquipEditPage,
      component:MonitorCctvListPage,
      // cssClass: 'risk-evaluation-class'
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
  }

  // async testMethod(){
  //   // https://ipcamlive.com/api/v2/getstreamhlsurl?apisecret=62b2d166929f4&alias=namgwang1
  //   const res = await this.connect.run('https://ipcamlive.com/api/v2/getstreamhlsurl', {apisecret:'62b2d166929f4',alias:'namgwang1'}, {cctv:true});
  //   switch (res.rsCode) {
  //     case 0:
  //       // this.dust = res.rsObj;
  //       break;
  //   }
  // }

  // /**
  //  * @function getCCTV(): CCTV목록정보를 가져옵니다.
  //  */
  //  async getCCTV(item, index) {
  //     let cctv_form = {
  //       project_id: item.project_id,
  //       master_company_id: this.user.userData.belong_data.master_company_id ? this.user.userData.belong_data.master_company_id : 0,
  //       search_text: '',
  //       limit_no: 0
  //     }
  
  //     const res = await this.connect.run('/cctv/list', cctv_form);
  //     if(res.rsCode === 0 ) {
  //       if(res?.rsMap?.length){
  //         let cctv_item = {
  //           project_id: item.project_id,
  //           project_name: item.project_name,
  //           cctv_list: []
  //         };
  //         this.cctv.push(cctv_item);
  //         res.rsMap.map((data_arr) => {if(data_arr.cctv_use_state) this.cctv[index]['cctv_list'].push(data_arr);});
  //       }
  //       // this.cctv = res;
        
  //     }
  //     else if (res.rsCode === 1008) {
  //       // this.cctv = null;
  //     }
  //     else {
  //       this.toast.present({ color: 'warning', message: res.rsMsg });
  //     }
  // }

  /**
   * @function getCCTV(): CCTV목록정보를 가져옵니다.
   */
   async getCCTV(item) {
    let cctv_form = {
      project_id: item[this.sence_cur].project_id,
      master_company_id: this.user.userData.belong_data.master_company_id ? this.user.userData.belong_data.master_company_id : 0,
      search_text: '',
      limit_no: 0
    }

    const res = await this.connect.run('/cctv/list', cctv_form);
    if(res.rsCode === 0 ) {
      if(res?.rsMap?.length){
        let cctv_item = {
          project_id: item[this.sence_cur].project_id,
          project_name: item[this.sence_cur].project_name,
          cctv_list: []
        };
        this.cctv.push(cctv_item);
        res.rsMap.map((data_arr) => {if(data_arr.cctv_use_state) this.cctv[this.sence_cur]['cctv_list'].push(data_arr);});

        if(this.sence_index-1 > this.sence_cur){
          console.log("들어옴!!!!! - ", this.sence_cur);
          this.sence_cur++;
          this.getCCTV(item);
        }
      }
    }
    else if (res.rsCode === 1008) {
      // this.cctv = null;
      let cctv_item = {
        project_id: item[this.sence_cur].project_id,
        project_name: item[this.sence_cur].project_name,
        cctv_list: []
      };
      this.cctv.push(cctv_item);

      this.sence_cur++;
      this.getCCTV(item);
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
}


  /**
   * @function getSence(): 현장목록정보를 가져옵니다.
   */
  sence_index = 0;
  sence_cur = 0;

   async getSence() {
    this.cctv = [];
    this.sence_cur = 0;
    let res = await this.connect.run('/category/certify/search_my_project/get', {search_text: ''});
    if (res.rsCode === 0) {
      if(res?.rsMap?.length){
        this.sence_index = res.rsMap.length;
        // res.rsMap.map(async(item, index) => {
        //   console.log('index', index);
        //   await this.getCCTV(item, index);
        // });

        await this.getCCTV(res.rsMap);
      }
    } else {
      // this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }
}