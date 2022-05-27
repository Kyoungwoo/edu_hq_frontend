import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { HeavyQrDataPage } from 'src/app/page/equipment-management/smart-equipment/heavy-qr-data/heavy-qr-data.page';
import { QrScannerComponent } from 'src/app/basic/component/dialog/qr-scanner/qr-scanner.component';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { NfcComponent } from '../../component/dialog/nfc/nfc.component';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor(
    private modal: ModalController,
    private user: UserService,
    private toast: ToastService,
    private connect: ConnectService,
    private alert: AlertService
  ) { }

  async init(info_state:boolean = false, single_state:boolean = false) {
    let return_state = {state: false,data: null};

    await this.qr_open(info_state, single_state).then((item) => {if(item) return_state.state = true;});

    return return_state;
  }
  
  /**
   * NFC ZONE
   * @param info_state 
   * @returns 
   */
  async nfc_open(info_state:boolean = false, single_state:boolean = false) {
    const modal = await this.modal.create({
      component:NfcComponent,
      cssClass:'scan-modal',
      componentProps: {
        single_state: single_state
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    let return_state = {
      state: false,
      data: null
    };

    if(data) {
      if(data?.state === 'NFC_SUCCESS'){
        // NFC 태깅 완료
        // 'WORK' - 오늘의작업, 'EDU' - 교육, 'ACC' - 건설기계
        switch(data?.item?.type){
          case 'WORK':
            return_state = await this.insert(info_state ? '/work_project/nfc_beacon/risk_area/get' : '/work_project/nfc_beacon/check_insup', {
              nb_log_state: 'NFC',
              project_id: this.user.userData.belong_data.project_id,
              serial_key: data?.item?.serial_key
            },info_state);
            break;
          // case 'EDU':
          //   this.insert('/work_project/nfc_beacon/check_insup', {
          //     nb_log_state: 'NFC',
          //     project_id: this.user.userData.belong_data.project_id,
          //     serial_key: data?.item?.key
          //   });
          //   break;
          // case 'ACC':
          //   this.insert('/work_project/nfc_beacon/check_insup', {
          //     nb_log_state: 'NFC',
          //     project_id: this.user.userData.belong_data.project_id,
          //     serial_key: data?.item?.key
          //   });
          //   break;
          default:
            this.toast.present({message: '해당 NFC는 지원대상에 없습니다.', color: 'warning'});
            break;
        }

        return_state.state = true;
      }
    }

    if(data?.state === 'QR_CHANGE') return_state = await this.qr_open(info_state);

    return return_state;
  };

  async qr_open(info_state:boolean = false, single_state:boolean = false) {
    const modal = await this.modal.create({
      component:QrScannerComponent,
      cssClass:'scan-modal',
      componentProps: {
        single_state: single_state
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    let return_state = {
      state: false,
      data: null
    };
    let ACC_state = false;

    if(data) {
      
      if(data?.state === 'QR_SUCCESS'){
        // NFC 태깅 완료
        // 'WORK' - 오늘의작업, 'EDU' - 교육, 'ACC' - 건설기계
        switch(data?.item?.type){
          case 'WORK':
            return_state = await this.insert(info_state ? '/work_project/nfc_beacon/risk_area/get' : '/work_project/nfc_beacon/check_insup', {
              nb_log_state: 'QR',
              project_id: this.user.userData.belong_data.project_id,
              serial_key: data?.item?.serial_key
            },info_state);
            break;
          case 'EDU':
            return_state = await this.insert('/education/my/attendant/insert', {education_safe_id: data?.item?.education_safe_id},info_state);
            break;
          case 'ACC':
            ACC_state = true;
            return_state.state = true;
            break;
          default:
            this.toast.present({message: '해당 NFC는 지원대상에 없습니다.', color: 'warning'});
            break;
        }
      }
    }

      const routerEl = document.querySelector('ion-router-outlet');
      const routerEl_2:any = document.getElementsByClassName('side-menu-class-user')[0];
      routerEl.style.display = 'flex';
      if(routerEl_2?.style?.display) routerEl_2.style.display = 'flex';
      const ionApp = document.getElementsByTagName('ion-app')[0];
      ionApp.style.backgroundColor = 'transparent';
      // modal.dismiss().then(async() => {

      // });
      if(data?.state === 'NFC_CHANGE') return_state = await this.nfc_open(info_state);
      if(ACC_state) this.modal_ACC(data?.item?.device_id);

      return return_state;
  };

  /**
   * @function modal_ACC(): 가걔장비 정보 모달
   */
   async modal_ACC(id) {
    const modal = await this.modal.create({
      component:HeavyQrDataPage,
      componentProps: {
        device_id: id,
        backbutton_state: true
      }
    });
    modal.present();
  }

  async insert(method:string,item,info_state:boolean = false){
    let data_obj = {
      state: false,
      data: null
    };
    const res = await this.connect.run(method, item);
    if (res.rsCode === 0) {
      data_obj.state = true;
      if(info_state) {
        data_obj.data = res.rsObj.area_risk_id;
      }

      this.alert.present({message: '등록 되었습니다'});
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }

    return data_obj;
  }
}
