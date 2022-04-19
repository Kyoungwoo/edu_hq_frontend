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
    private user: UserService
  ) { }

  nfcallback;

  async open() {
    // this.nfcallback = callback;
    const modal = await this.modal.create({
      component:NfcComponent,
      cssClass:'scan-modal',
      // componentProps:{
      //   type,
      //   getNfcData:(_value) => {
      //     this.getNfcData(_value);
      //   }
      // }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    let return_state = false;

    if(data) {
      if(data?.state === 'QR_CHANGE') this.scanner.open_qr();
      if(data?.state === 'NFC_SUCCESS'){
        // NFC 태깅 완료
        // 'WORK' - 오늘의작업, 'EDU' - 교육, 'ACC' - 건설기계
        
        switch(data?.item?.type){
          case 'WORK':
            this.insert('/work_project/nfc_beacon/check_insup', {
              nb_log_state: 'NFC',
              project_id: this.user.userData.belong_data.project_id,
              serial_key: data?.item?.key
            });
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

        return_state = true;
      }
    }
    // return {
    //   unsubscribe:async() => {
        // this.modal.dismiss();
        // const toast = await this.toast.create({
        //   message:'NFC 태그가 완료 되었습니다.',
        //   duration:1500,
        //   color:'primary' 
        // });
        // toast.present();
    //   }
    // }

    return return_state;
  };

  async insert(method:string,item){

  }

  async getNfcData(value) {
    return this.nfcallback(value);
  }
}
