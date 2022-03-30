import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { SearchAreaComponent } from 'src/app/component/modal/search-area/search-area.component';
import { SearchDangerousAreaComponent } from 'src/app/component/modal/search-dangerous-area/search-dangerous-area.component';
import { DangerAreaAddPage } from '../danger-area-add/danger-area-add.page';
import { DangerAreaDetailSearchPage } from '../danger-area-detail-search/danger-area-detail-search.page';

class DangerAreaInfo {
  area_risk_id: number;
  serial_use_state: number;
  ctgo_area_risk_name: string;
  area_middle_id: number;
  ctgo_area_risk_id: number;
  area_bottom_name: string;
  update_user_id: number;
  serial_id: number;
  area_top_id: number;
  master_company_id: number;
  create_date: string;
  create_user_id: number;
  device_id: number;
  area_middle_name:string;
  serial_type: string;
  ctgo_machine_serial_name: string;
  master_company_name: string;
  area_risk_name: string;
  update_date: string;
  area_bottom_id: number;
  area_top_name: string;
  ctgo_machine_serial_id: number;
  return_state: number;
  serial_no: string;
  return_date: string;
  index: number;
  row_count: number
}

@Component({
  selector: 'app-danger-area-list',
  templateUrl: './danger-area-list.page.html',
  styleUrls: ['./danger-area-list.page.scss'],
})
export class DangerAreaListPage implements OnInit {

  form = {
    company_id: 0,
    end_date: this.date.today(),
    ctgo_machine_serial_id: 0,
    project_id: this.user.userData.belong_data.project_id,
    master_company_id: (this.user.userData.user_type == 'LH' || this.user.userData.user_type == 'SUPER') ? 0 : this.user.userData.belong_data.company_id,
    search_text: '',
    start_date: this.date.today({ month: -1 }),
    limit_no: 0,
    serial_type: '위험지역'
  };

  res:ConnectResult<DangerAreaInfo>;

  ctgoMachine:ConnectResult<{
    ctgo_machine_serial_name: string, 
    ctgo_machine_serial_id: number 
  }>

  resCtgoRisk: ConnectResult<{
    ctgo_area_risk_id: number,
    ctgo_area_risk_name: string
  }>

  riskForm ={
    area_bottom_id:0, // 배정 장소 레벨 3 ID
    area_middle_id:0, // 배정 장소 레벨 2 ID
    area_risk_id:0, // 배정 위험지역 ID
    area_top_id:0, // 배정 장소 레벨 1 ID
    assign_user_id:0, // 배정 유저 ID
    ctgo_machine_serial_id:0, // 장비구분 ID
    machinery_id:0, // 배정 중장비 ID
    serial_id:0, // 시리얼 NO ID
    serial_use_state:false, // 사용여부
    user_id:0 // 유저 ID
  }
  
    resRiskArea: ConnectResult<{
    second_user_id: number, // 관리 책임자 부
    area_risk_id: number, // 위험지역 ID
    area_middle_name: string, // 장소2
    ctgo_area_risk_name: string, // 위험지역 유형
    area_middle_id: number, // 장소2 ID
    ctgo_area_risk_id: number, // 위험지역 ID
    area_risk_name: string, // 위험지역 명
    manager_user_id: number, // 관리 책임자 정
    area_bottom_name: string, // 장소3
    area_risk_type: string, // 실내/실외
    nfc_state: number, // NFC 등록여부 개수
    project_id: number, // 현장 ID
    area_top_id: number, // 장소1 ID
    area_bottom_id: number, // 장소3 ID
    area_risk_use_state: number, // 사용여부
    area_top_name: string, // 장소1
    gps_state: number // GPS 등록여부 / 1 등록, 0 미등록
    row_count: number
  }>;

  riskProjectForm = {
    limit_no: 0,
    project_id: this.user.userData.belong_data.project_id
  }

  selectedList = [];

  constructor(
    private modal: ModalController,
    private toast: ToastService,
    private connect: ConnectService,
    private date: DateService,
    public user: UserService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.getList();
    this.getCtgoMachine();
  }

  async getList(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    const res = await this.connect.run('/device/risk/list', this.form);
    if(res.rsCode === 0 ) {
      this.res = res;
      this.res.rsMap.map((item, i) => {
        item.index = res.rsObj.row_count - this.form.limit_no - i;
      });
    }
    else if (res.rsCode === 1008) {
      this.res = null;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  async getCtgoMachine() {
    this.ctgoMachine = await this.connect.run('/category/serial/machine/get',
    {
      serial_type: this.form.serial_type
    },{});
    if(this.ctgoMachine.rsCode === 0) {
    }
  }

  public async openDetailSearch() {
    const modal = await this.modal.create({
      component: DangerAreaDetailSearchPage,

    })
    modal.present();
  }



  async Dangeredit(item?) {
    if(!this.res?.rsMap.length) { 
      this.res.rsMap = [];
    } else {
      this.res.rsMap.unshift(new DangerAreaInfo);
    }
    // const modal = await this.modal.create({
    //   component:DangerAreaAddPage,
    //   componentProps:{
    //     ctgo_machine_serial_id: item?.ctgo_machine_serial_id,
    //   }
    // });
    // modal.present();
    // const { data } = await modal.onDidDismiss();
    // if(data) {
    //   this.getList();
    // }
  }

  async Dangerdelete() {
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/device/delete', {
              device_ids : this.selectedList
            });
            if (res.rsCode === 0) {
              this.getList();
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    });
    alert.present();
  }

  async riskAreaSearch(item) {
    if(item.device_id) return;
    const modal = await this.modal.create({
      component: SearchDangerousAreaComponent,
      componentProps: {
        project_id: this.riskProjectForm.project_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      console.log("data",data);
      const res = this.res.rsMap;
      for (let i = 0; i < res?.length; i++) {
        if(!res[i].area_risk_id) {
          item.area_top_id = data?.area_top_id;
          item.area_middle_id = data?.area_middle_id;
          item.area_bottom_id = data?.area_bottom_id;
          item.area_top_name = data?.area_top_name;
          item.area_middle_name = data?.area_middle_name;
          item.area_bottom_name = data?.area_bottom_name;
          item.area_risk_name = data?.area_risk_name;
          item.ctgo_area_risk_name = data?.ctgo_area_risk_name;
        }
      }
    }
  }

  dataChange(ev)  {
    console.log("ev",ev);
  }
}
