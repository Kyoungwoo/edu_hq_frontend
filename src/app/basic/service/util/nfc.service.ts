import { ConnectService } from './../core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NfcComponent } from '../../component/dialog/nfc/nfc.component';
import { ScannerService } from './scanner.service';

@Injectable({
  providedIn: 'root'
})
export class NfcService {

  constructor(
    private modal : ModalController,
    private toast: ToastService,
    private scanner: ScannerService,
    private user: UserService,
    private connect: ConnectService
  ) { }

  async open(info_state:boolean = false) {
    const modal = await this.modal.create({
      component:NfcComponent,
      cssClass:'scan-modal'
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    let return_state = {
      state: false,
      data: null
    };

    if(data) {
      // if(data?.state === 'QR_CHANGE') return_state = await this.scanner.open_qr(info_state);
      if(data?.state === 'NFC_SUCCESS'){
        // NFC 태깅 완료
        // 'WORK' - 오늘의작업, 'EDU' - 교육, 'ACC' - 건설기계
        console.log('nfc_data - ', data);
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
            console.log('nfc data - ',data);
            this.toast.present({message: '해당 NFC는 지원대상에 없습니다.', color: 'warning'});
            break;
        }

        return_state.state = true;
      }
    }

    return return_state;
  };

  async insert(method:string,item,info_state:boolean = false){
    let data_obj = {
      state: false,
      data: null
    };
    const res = await this.connect.run(method, item);
    if (res.rsCode === 0) {
      data_obj.state = true;
      if(info_state) {
        console.log("info_state - ",info_state);
        data_obj.data = res.rsObj.area_risk_id;
      }
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }

    return data_obj;
  }
}
