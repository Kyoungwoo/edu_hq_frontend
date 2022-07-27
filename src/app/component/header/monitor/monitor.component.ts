import { MonitorCctvListPage } from './../../../page/monitor/monitor-cctv-list/monitor-cctv-list.page';
import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { DeviceService } from 'src/app/basic/service/core/device.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { LogoutService } from 'src/app/service/logout.service';
import { SideMenuAdminComponent } from '../../side-menu/side-menu-admin/side-menu-admin.component';
import { timingSafeEqual } from 'crypto';


interface Tab {
  text:string,
  data:string
}

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-moniter-header',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
})
export class MonitorComponent implements OnInit {

  @Input() form;

  tabList:Tab[] = [
    { text: '현장 모니터링',
      data:'현장 모니터링'
    },
    { text: 'CCTV 모니터링',
      data:'CCTV 모니터링'
    },
    { text: '실시간 위치 모니터링',
      data:'실시간 위치 모니터링'
    }
  ]

  @Output() formChange = new EventEmitter();

  tabActive:string = '현장 모니터링';

  weather = {
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
    low_weather_temp:"", // 최저 기온(온도),
    weather_pty:""
  }

  dust = {
    dataTime: "",
    grade_name: "",
    icon_url: "",
    pm10Value: 0,
    pm25Grade: 0
  }

  $activedRoute:Subscription;
  intervalWeather_Dust;
  
  constructor(
    private animationCtrl: AnimationController,
    private modal:ModalController,
    private nav: NavService,
    public adminMenu: SideMenuAdminComponent,
    private activedRoute: ActivatedRoute,
    public user: UserService,
    private connect: ConnectService,
    private device: DeviceService,
    public logout: LogoutService
  ) { }
  
  ngOnInit() {
    this.$activedRoute = this.activedRoute.queryParams.subscribe(params => {

      const { monitor } = params;
      switch(monitor) {
        case '현장 모니터링':
          this.tabActive = this.tabList[0].data;
          break;
        case 'CCTV 모니터링':
          this.tabActive = this.tabList[1].data;
          break;
        case '실시간 위치 모니터링':
          this.tabActive = this.tabList[2].data;
          break;
      }

    });

    this.IntervalWeather_Dust();
  }

  ngOnDestroy(): void {
    this.$activedRoute.unsubscribe();
    clearInterval(this.intervalWeather_Dust);
  }

  segmentChange() {
    this.nav.navigateForward('/monitor', {
      queryParams: {
        monitor: this.tabActive
      }
    })
  }

  /**
   * @function IntervalWeather_Dust(): 날씨와 미세먼지 데이터를 인터벌 돌리는 메서드
   */
  IntervalWeather_Dust(){
    this.intervalWeather_Dust = setInterval(() => {
      this.getWeather();
      this.getDust();
    }, 1800000);

    this.getWeather();
    this.getDust();
  }

  /**
   * @function getWeather(): 날씨 데이터를 가져오는 메서드
   */
   async getWeather() {
    //날씨
    const res = await this.connect.run('/weather/get');
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
    const res = await this.connect.run('/dust/get'); 
    switch(res.rsCode) {
      case 0 :
        this.dust = res.rsObj;
        break;
    }
  }

  main() {
    const { userData } = this.user;
    if(this.device.platform_type < 3) {
      switch(userData.user_type) {
        case 'LH':
        case 'SUPER':
          this.nav.navigateRoot('/main-user');
          break;
        case 'COMPANY':
          if(userData.user_role === 'MASTER_HEAD' || userData.user_role === 'MASTER_GENERAL') {
            this.nav.navigateRoot('/main-user-master');
          }
          else {
            this.nav.navigateRoot('/main-user-partner');
          }
          break;
        case 'WORKER':
          this.nav.navigateRoot('/main-user-worker');
          break;
      }
    }
    else {
      if(userData.user_type === 'COMPANY') {
        this.nav.navigateRoot('/main-sub-admin');
      }
      else {
        this.nav.navigateRoot('/main-admin');
      }
    }
  }

  async openSideMenu(){
    const modal = await this.modal.create({
      component: SideMenuAdminComponent,
      cssClass:'side-menu-admin-modal',
      enterAnimation: (baseEl:HTMLElement) => {
        const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
        .duration(100)
        .fromTo('opacity', '0', '0.08');

        const wrapperEl = <HTMLElement>baseEl.getElementsByClassName('modal-wrapper')[0];
        wrapperEl.style.transformOrigin = '50% 0';
        const wrapperAnimation = this.animationCtrl.create()
        .addElement(wrapperEl)
        .duration(100)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'scaleY(0.99)', 'scaleY(1)');

        return this.animationCtrl.create()
        .addAnimation([backdropAnimation, wrapperAnimation]);
      },
      leaveAnimation: (baseEl:HTMLElement) => {
        const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
        .duration(100)
        .fromTo('opacity', '0.08', '0');
        const wrapperEl = <HTMLElement>baseEl.getElementsByClassName('modal-wrapper')[0]
        wrapperEl.style.transformOrigin = '50% 0';
        const wrapperAnimation = this.animationCtrl.create()
        .addElement(wrapperEl)
        .duration(100)
        .fromTo('opacity', '1', '0')
        .fromTo('transform', 'scale(1)', 'scale(0.99)');
        

        return this.animationCtrl.create()
        .addAnimation([backdropAnimation, wrapperAnimation]);
      }
    });
    modal.present();
  }

  /**
   * @function monitorCctvList(): CCTV 목록 리스트 모달
   */
   async monitorCctvList() {
    // const modal = await this.modal.create({
    //   // component:MonitorSmartEquipEditPage,
    //   component:MonitorCctvListPage,
    //   // cssClass: 'risk-evaluation-class'
    // });
    // modal.present();
    // const { data } = await modal.onDidDismiss();

    window.dispatchEvent(new CustomEvent('cctvList:get()'));
  }

  changeProjectPosition(){
    console.log('changeProjectPosition - ', this.form.project_id);
    const res = new CustomEvent('change_project:get()', {detail: {project_id: this.form.project_id}});
    window.dispatchEvent(res);
  }
}
