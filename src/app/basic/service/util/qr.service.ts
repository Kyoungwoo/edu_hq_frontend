import { ToastService } from './../ionic/toast.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ModalController } from '@ionic/angular';
import { QrScannerComponent } from 'src/app/basic/component/dialog/qr-scanner/qr-scanner.component';
import { Subscription } from 'rxjs';
import { Injectable, Input } from '@angular/core';
import { ScannerService } from './scanner.service';
import { HeavyQrDataPage } from 'src/app/page/equipment-management/smart-equipment/heavy-qr-data/heavy-qr-data.page';

@Injectable({
  providedIn: 'root'
})

export class QrService {
  qr_subs:Subscription;
  qr_value = null;
  qr_response = {
    qr_data: '',
    qr_qrScanner: null,
    qr_modal: null,
    qr_subs: null
  }
  @Input() item;
 
constructor(
    private _modal : ModalController,
    private scanner: ScannerService,
    private user: UserService,
    private toast: ToastService
    ) { }
    qrCallback;
    
  async open() {
    // this.qrCallback = callback;
    const modal = await this._modal.create({
      component:QrScannerComponent,
      cssClass:'scan-modal',
      // componentProps: {
      //   type,
      //   getQrData: (value) => {
      //     this.getQrData(value);
      //   }
      // }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    let return_state = false;
    let ACC_state = false;

    if(data) {
      if(data?.state === 'NFC_CHANGE') this.scanner.open_nfc();
    }

    if(data) {
      if(data?.state === 'NFC_CHANGE') this.scanner.open_qr();
      if(data?.state === 'QR_SUCCESS'){
        // NFC 태깅 완료
        // 'WORK' - 오늘의작업, 'EDU' - 교육, 'ACC' - 건설기계
        console.log('qr_data - ', data);
        switch(data?.item?.type){
          case 'WORK':
            return_state = await this.insert('/work_project/nfc_beacon/check_insup', {
              nb_log_state: 'QR',
              project_id: this.user.userData.belong_data.project_id,
              serial_key: data?.item?.serial_key
            });
            break;
          case 'EDU':
            return_state = await this.insert('/education/my/attendant/insert', {education_safe_id: data?.item?.education_safe_id});
            break;
          case 'ACC':
            // data?.item?.key
            ACC_state = true;
            return_state = true;
            break;
          default:
            this.toast.present({message: '해당 NFC는 지원대상에 없습니다.', color: 'warning'});
            break;
        }
      }
    }

      // return {
      //   unsubscribe: () => {
          const routerEl = document.querySelector('ion-router-outlet');
          routerEl.style.display = 'flex';
          const ionApp = document.getElementsByTagName('ion-app')[0];
          ionApp.style.backgroundColor = 'transparent';
          // this.qr_response.qr_modal.dismiss();
          // this.qr_response.qr_subs.unsubscribe();
          // this.qrCallback = null;
          modal.dismiss().then(() => {
            if(ACC_state) this.modal_ACC(data?.item?.device_id);
          });
        // }
      // };

      return return_state;
  };

  /**
   * @function modal_ACC(): 가걔장비 정보 모달
   */
   async modal_ACC(id) {
    const modal = await this._modal.create({
      component:HeavyQrDataPage,
      componentProps: {
        device_id: id
      }
    });
    modal.present();
  }

  async insert(method:string,item){
    let state = false;

    return state;
  }
  
  // async getQrData(value) {
  //   this.qr_response = {...value};
  //   return this.qrCallback(value);
  // }
}
