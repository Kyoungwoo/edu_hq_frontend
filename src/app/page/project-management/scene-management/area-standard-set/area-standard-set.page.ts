import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { GpsCoordinateData } from 'src/app/basic/component/input/naver-map/naver-map.component';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { SearchAreaComponent } from 'src/app/component/modal/search-area/search-area.component';
import { AreaAddPage } from '../area-add/area-add.page';
import { NfcInfoComponent } from './component/nfc-info/nfc-info.component';

export class FileData {
  file: (File | FileBlob)[] = [];
  file_json: FileJson = new FileJson();
  project_id: number
  file_data: FutItem[] = [];
  ctgo_business_field_id: string;
  ctgo_business_field_name: string;
}

export class GPS_COORDINATE_DATA {
  gps_latitude: number[] = [];
  gps_longitude: number[] = [];
}

export class SelectItem {
  area_bottom_id: number;
  area_bottom_name: string;
  area_middle_id: number;
  area_middle_name: string;
  area_risk_id: number;
  area_risk_name: string;
  area_top_id: number;
  area_top_name: string;
  ctgo_area_risk_name: string;
  gps_id: number;
  gps_state: number;
  project_id: number;
  gps_coordinate_data = new GPS_COORDINATE_DATA();
}

@Component({
  selector: 'app-area-standard-set',
  templateUrl: './area-standard-set.page.html',
  styleUrls: ['./area-standard-set.page.scss'],
})
export class AreaStandardSetPage implements OnInit {

  menuCount: Number = 1;
  //장소
  resAreaOne: ConnectResult<{
    area_top_name: string,
    area_top_id: number
  }>;

  resAreaTwo: ConnectResult<{
    area_middle_name: string, // 장소2
    area_top_id: number, // 장소1 ID
    area_middle_id: number // 장소2 ID
  }>;

  form: FileData = new FileData();
  resAreaThree: ConnectResult<{
    area_bottom_name: string, //장소 3
    area_top_id: number, // 장소1 ID
    area_middle_id: number, // 장소2 ID
    area_bottom_id: number // 장소3 ID
  }>

  AreaOneForm = {
    project_id: this.user.userData.belong_data.project_id
  }
  riskProjectForm = {
    limit_no: 0,
    project_id: this.user.userData.belong_data.project_id
  }
  selectDataArea1 = [];
  selectDataArea2 = [];
  selectDataArea3 = [];

  area_top_id: number;
  area_middle_id: number;
  area_bottom_id: number;

  //장소 끝
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

  riskAreaName: string;
  resCtgoRisk: ConnectResult<{
    ctgo_area_risk_id: number,
    ctgo_area_risk_name: string
  }>
  addRiskAreaArr = [];
  addRiskData = {
    area_middle_name: '', // 장소2
    area_bottom_name: '', // 장소3
    area_top_name: '', // 장소1
  }
  riskAreaData = [];

  area_risk_use_state_data = [];
  gps_coordinate_data = new GpsCoordinateData();

  resGPS: ConnectResult<{
    area_bottom_name: string,
    area_risk_id: number,
    gps_id: number,
    project_id: number,
    area_middle_name: string,
    ctgo_area_risk_name: string,
    area_top_id: number,
    area_middle_id: number,
    area_bottom_id: number,
    area_top_name: string,
    gps_state: number,
    area_risk_name: string
  }>

  resGPScood: ConnectResult<{
    order_no: number,
    gps_id: number,
    gps_latitude: number,
    gps_longitude: number
  }>
  gpsSelected = null;

  naverMapSetting: boolean = true;
  areaRoleCheck: boolean = true;

  updateEdit: boolean = false;

  // active_items = {
  //   area_1: 0,
  //   area_2: 0,
  //   area_3: 0
  // }

  constructor(
    private modal: ModalController,
    private connect: ConnectService,
    private toast: ToastService,
    private alert: AlertService,
    public user: UserService,
    private changeRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if (this.user.userData.user_role === 'MASTER_HEAD' ||
      this.user.userData.user_role === 'LH_ADMIN' ||
      this.user.userData.user_role === 'LH_HEAD') {
      this.areaRoleCheck = false;
    }
    this.getGuidemap();
    this.AreaOne();
    this.CtgoRisk();
  }

  async areaSearch() {
    await this.getGuidemap();
    await this.AreaOne();
  }
  async getGuidemap() {
    const res = await this.connect.run('/project/area/guidemap/get', { project_id: this.AreaOneForm.project_id, }, {
      parse: ['file_data']
    });
    if (res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      };
    } else {
      this.form = null;
      console.log("this.from", this.form);
    }
  }

  async updateGuidemap() {
    this.alert.present({
      message: '저장 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            this.form.project_id = this.AreaOneForm.project_id;
            const res = await this.connect.run('/project/area/guidemap/update', this.form, {});
            if (res.rsCode === 0) { }
          }
        }
      ]
    });
  }

  async AreaOne() {
    this.resAreaOne = await this.connect.run('/project/area/top/get', this.AreaOneForm, {});
    if (this.resAreaOne.rsCode === 0) {

    }
  }

  async areaTow(area_top_id) {
    this.area_top_id = area_top_id;
    this.area_middle_id = 0;
    this.area_bottom_id = 0;
    this.resAreaThree = null;
    this.resAreaTwo = await this.connect.run('/project/area/middle/get', { area_top_id: area_top_id }, {});
    if (this.resAreaTwo.rsCode === 0) {

    }
  }

  async areaThree(area_middle_id) {
    this.area_middle_id = area_middle_id;
    this.area_bottom_id = 0;
    this.resAreaThree = await this.connect.run('/project/area/bottom/get', {
      area_middle_id: area_middle_id,
      area_top_id: this.area_top_id
    }, {});
    if (this.resAreaThree.rsCode === 0) {

    }
  }

  async areaFour(area_bottom_id){
    this.area_bottom_id = area_bottom_id;
  }

  async areaOneEdit(area, update?) {
    if (update) {
      if (!this.selectDataArea1.length) return await this.toast.present({ message: '장소를 선택해 주세요', color: 'danger' });
    }
    if (this.selectDataArea1.length > 1) return await this.toast.present({ message: '한 개만 선택해 주세요.', color: 'danger' });
    if (!this.AreaOneForm.project_id) return await this.toast.present({ message: '현장을 선택해 주세요.', color: 'danger' });
    const modal = await this.modal.create({
      component: AreaAddPage,
      componentProps: {
        selectData: this.selectDataArea1[0],
        project_id: this.AreaOneForm.project_id,
        area
      },
      cssClass: 'lhOrganization'
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.AreaOne();
    }
  }


  async areaTwoEdit(area, update?) {
    if (update) {
      if (!this.selectDataArea2.length) return await this.toast.present({ message: '장소를 선택해 주세요', color: 'danger' });
    }
    if (!this.area_top_id) return this.toast.present({ message: 'area1을 선택해주세요.', color: 'warning' });
    if (this.selectDataArea2.length > 1) return await this.toast.present({ message: '한 개만 선택해 주세요.', color: 'danger' });
    if (!this.AreaOneForm.project_id) return await this.toast.present({ message: '현장을 선택해 주세요.', color: 'danger' });
    const modal = await this.modal.create({
      component: AreaAddPage,
      componentProps: {
        area_top_id: this.area_top_id,
        selectData: this.selectDataArea2[0],
        project_id: this.AreaOneForm.project_id,
        area
      },
      cssClass: 'lhOrganization'
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.areaTow(data);
    }
    // if(data) this.testarr.push({text:data.text});
  }


  async areaThreeEdit(area, update?) {
    if (update) {
      if (!this.selectDataArea3.length) return await this.toast.present({ message: '장소를 선택해 주세요' });
    }
    if (this.selectDataArea3.length > 1) return await this.toast.present({ message: '한 개만 선택해 주세요.' });
    if (!this.AreaOneForm.project_id) return await this.toast.present({ message: '현장을 선택해 주세요.' });
    if (!this.area_top_id) return this.toast.present({ message: 'area1을 선택해주세요.', color: 'warning' });
    if (!this.area_middle_id) return this.toast.present({ message: 'area2를 선택해주세요', color: 'warning' });
    const modal = await this.modal.create({
      component: AreaAddPage,
      componentProps: {
        area_middle_id: this.area_middle_id,
        selectData: this.selectDataArea3[0],
        area_top_id: this.area_top_id,
        area
      },
      cssClass: 'lhOrganization'
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.areaThree(data);
    }
  }

  async deleteArea(area) {
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            switch (area) {
              case 1:
                for (let i = 0; i < this.selectDataArea1.length; i++) {
                  const res = await this.connect.run('/project/area/top/delete', {
                    area_top_id: this.selectDataArea1[i].area_top_id,
                    project_id: this.AreaOneForm.project_id
                  });
                  if (res.rsCode === 0) { this.AreaOne() };
                }
                break;
              case 2:
                for (let i = 0; i < this.selectDataArea2.length; i++) {
                  const res = await this.connect.run('/project/area/middle/delete', {
                    area_middle_id: this.selectDataArea2[i].area_middle_id,
                    area_top_id: this.area_top_id,
                  });
                  if (res.rsCode === 0) { this.areaTow(this.area_top_id) };
                }
                break;
              case 3:
                for (let i = 0; i < this.selectDataArea3.length; i++) {
                  const res = await this.connect.run('/project/area/bottom/delete', {
                    area_top_id: this.area_top_id,
                    area_middle_id: this.area_middle_id,
                    area_bottom_id: this.selectDataArea3[i].area_bottom_id
                  });
                  if (res.rsCode === 0) { this.areaThree(this.area_middle_id) };
                }
                break;
            }
          }
        }
      ]
    });
    alert.present();
  }


  async getRiskArea(limit_no = this.riskProjectForm.limit_no) {
    this.addRiskAreaArr = [];
    this.riskProjectForm.limit_no = limit_no;
    this.menuCount = 2;
    this.updateEdit = true;

    this.resRiskArea = await this.connect.run('/project/area/risk/get', this.riskProjectForm);
    if (this.resRiskArea.rsCode === 0) {
      setTimeout(() => {
        this.updateEdit = false;
      }, 1000);
    } else {
      if (!this.riskProjectForm.limit_no) this.toast.present({ message: this.resRiskArea.rsMsg, color: 'warning' });
    }
  }

  addRiskArea() {
    if (this.resRiskArea?.rsMap) {
      this.resRiskArea.rsMap.unshift({
        second_user_id: 0, // 관리 책임자 부
        area_risk_id: 0, // 위험지역 ID
        area_middle_name: '', // 장소2
        ctgo_area_risk_name: '', // 위험지역 유형
        area_middle_id: 0, // 장소2 ID
        ctgo_area_risk_id: 0, // 위험지역 ID
        area_risk_name: '', // 위험지역 명
        manager_user_id: 0, // 관리 책임자 정
        area_bottom_name: '', // 장소3
        area_risk_type: '', // 실내/실외
        nfc_state: 0, // NFC 등록여부 개수
        project_id: 0, // 현장 ID
        area_top_id: 0, // 장소1 ID
        area_bottom_id: 0, // 장소3 ID
        area_risk_use_state: 1, // 사용여부
        area_top_name: '', // 장소1
        gps_state: 0, // GPS 등록여부 / 1 등록, 0 미등록
        row_count: 0
      });
    } else {
      this.resRiskArea.rsMap = [];
      this.resRiskArea.rsMap.push({
        second_user_id: 0, // 관리 책임자 부
        area_risk_id: 0, // 위험지역 ID
        area_middle_name: '', // 장소2
        ctgo_area_risk_name: '', // 위험지역 유형
        area_middle_id: 0, // 장소2 ID
        ctgo_area_risk_id: 0, // 위험지역 ID
        area_risk_name: '', // 위험지역 명
        manager_user_id: 0, // 관리 책임자 정
        area_bottom_name: '', // 장소3
        area_risk_type: '', // 실내/실외
        nfc_state: 0, // NFC 등록여부 개수
        project_id: 0, // 현장 ID
        area_top_id: 0, // 장소1 ID
        area_bottom_id: 0, // 장소3 ID
        area_risk_use_state: 1, // 사용여부
        area_top_name: '', // 장소1
        gps_state: 0, // GPS 등록여부 / 1 등록, 0 미등록
        row_count: 0
      });
    }
  }

  async CtgoRisk() {
    this.resCtgoRisk = await this.connect.run('/category/risk/type/get', {}, {});
    if (this.resCtgoRisk.rsCode === 0) { };
  }

  async riskSave() {
    const riskArea = this.resRiskArea.rsMap;
    riskArea.forEach(async (item, i) => {
      // if (!item.area_top_id) return this.toast.present({ message: '첫번째 장소를 선택해주세요.', color: 'warning' })
      item.area_middle_id = item.area_middle_id  || 0;
      item.area_bottom_id = item.area_middle_id  || 0;
      // if (!item.area_middle_id) return this.toast.present({ message: '두번째 장소를 선택해주세요.', color: 'warning' })
      // if (!item.area_bottom_id) return this.toast.present({ message: '세번째 장소를 선택해주세요.', color: 'warning' })
      
      if (!item.ctgo_area_risk_id) return this.toast.present({ message: '위험지역유형을 선택해주세요.', color: 'warning' });
      if (!item.area_risk_name) return this.toast.present({ message: '위험지역명을 작성해주세요.', color: 'warning' });
      // if (!item.area_risk_type) return this.toast.present({ message: '실내/실외를 선택해주세요.', color: 'warning' });
      // if (!item.manager_user_id) return this.toast.present({ message: '관리 책임자(정(을 선택해주세요.', color: 'warning' })
      // if (!item.second_user_id) return this.toast.present({ message: '관리 책임자(부)를 선택해주세요.', color: 'warning' })
      if (!item.area_risk_id) {
        item.project_id = this.riskProjectForm.project_id;
        const resInsert = await this.connect.run('/project/risk_area/insert', item);
        if (resInsert.rsCode === 0) {
          this.getRiskArea();
          if (this.addRiskAreaArr.length === i) {
            this.toast.present({ message: '저장되었습니다.', color: 'primary' });
          }
        } else {
          this.toast.present({ message: resInsert.rsMsg, color: 'warning' });
        }
      }

    });
  }

  async nfcView(area_risk_id) {
    if (!area_risk_id) return;
    const modal = await this.modal.create({
      component: NfcInfoComponent,
      componentProps: { area_risk_id },
      cssClass: 'lhOrganization'
    });
    modal.present();
  }

  async riskAreaSearch(item) {
    console.log(item);
    if (item.area_risk_id) return;
    const modal = await this.modal.create({
      component: SearchAreaComponent,
      componentProps: {
        project_id: this.riskProjectForm.project_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      const riskArea = this.resRiskArea.rsMap;
      for (let i = 0; i < riskArea.length; i++) {
        if (!riskArea[i].area_risk_id) {
          item.area_top_id = data?.area1selectedItem.area_top_id;
          item.area_middle_id = data?.area2selectedItem?.area_middle_id;
          item.area_bottom_id = data?.area3selectedItem?.area_bottom_id;
          item.area_top_name = data?.area1selectedItem.area_top_name;
          item.area_middle_name = data?.area2selectedItem?.area_middle_name;
          item.area_bottom_name = data?.area3selectedItem?.area_bottom_name;
        }
      }
    }
  }

  async deleteRisk() {
    if (!this.riskAreaData.length) return this.toast.present({ message: '최소 1개이상 선택해주세요.', color: 'warning' });
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            this.riskAreaData.forEach(async (item, i) => {
              if (item.area_risk_id) {
                const res = await this.connect.run('/project/risk_area/delete', {
                  area_risk_id: item.area_risk_id,
                  project_id: this.riskProjectForm.project_id
                });
                if (res.rsCode === 0) {
                  if (this.riskAreaData.length === i) {
                    this.toast.present({ message: '삭제 되었습니다.', color: 'primary' });
                  }
                  this.getRiskArea();
                } else {
                  this.toast.present({ message: res.rsMsg, color: 'warning' })
                }
              } else {
                const list = this.resRiskArea.rsMap;
                list.splice(list.findIndex(data => data === item), 1);
              }
            });
          }
        }
      ]
    })
  }

  allStatus(status) {
    console.log(status);
    this.resRiskArea.rsMap.forEach(item => {
      item.area_risk_use_state = status ? 1 : 0;
    })
  }

  async editState(item) {
    this.area_risk_use_state_data.push({
      area_risk_id: item.area_risk_id,
      area_risk_use_state: item.area_risk_use_state
    });
    // const res = await this.connect.run('/project/area/risk/use/update',);
  }

  async areaGPS() {
    this.menuCount = 3;
    this.resGPS = await this.connect.run('/project/area/risk/gps/get', this.riskProjectForm);
    if (this.resGPS.rsCode === 0) {
      this.getGpsCoodrinate(this.resGPS.rsMap?.[0]);
    };
  }

  initMap:boolean = false;
  async getGpsCoodrinate(item) {
    console.log(item);
    if(!item) return;
    this.gpsSelected = item;
    this.naverMapSetting = false;
    
    
    this.initMap = false;
    if (item.gps_id){
      this.resGPScood = await this.connect.run('/project/area/risk/gps_coodrinate/get', { gps_id: item.gps_id });
      if (this.resGPScood.rsCode === 0) {
        const gps_coordinate_data = new GpsCoordinateData();
        this.resGPScood.rsMap.forEach(data => {
          if(item.gps_id === data.gps_id) {
            gps_coordinate_data.gps_latitude.push(data.gps_latitude);
            gps_coordinate_data.gps_longitude.push(data.gps_longitude);
          }
        });
        this.gps_coordinate_data = gps_coordinate_data;
      }
      else {
        this.gps_coordinate_data = new GpsCoordinateData();
      }
    } else {
      this.gps_coordinate_data = new GpsCoordinateData();
    }

    setTimeout(() => {
      this.initMap = true;
    }, 0);
  }
  async gpsSave() {
    if (!this.gpsSelected.area_risk_id) return this.toast.present({ message: '위험지역을 선택해주세요.', color: 'warning' });

    this.gpsSelected.gps_coordinate_data = this.gps_coordinate_data;
    const res = await this.connect.run('/project/area/risk/gps/insert', this.gpsSelected, {});
    if (res.rsCode === 0) {
      this.toast.present({ message: '등록되었습니다.', color:'primary' });
      this.areaGPS();
    } else {
      this.toast.present({ message: res.rsMsg, color:'warning' });
    }
  }

  async updateState(item) {
    if (this.updateEdit) return; // 업데이트 권한? 나중에 확인
    if(!item.area_risk_id) return; // 신규 등록일 시, id가 없으면 업데이트를 하면 안됨.

    let area_risk_use_state_data = [];
    area_risk_use_state_data.push({
      area_risk_id: item.area_risk_id,
      area_risk_use_state: item.area_risk_use_state
    });
    
    const resUpdate = await this.connect.run('/project/area/risk/use/update', { area_risk_use_state_data: area_risk_use_state_data });
    
    if (resUpdate.rsCode === 0) {
      this.getRiskArea();
      this.toast.present({ message: '저장되었습니다.', color: 'primary' });
    } 
    else {
      this.toast.present({ message: resUpdate.rsMsg, color: 'warning' });
    }
  }
}
