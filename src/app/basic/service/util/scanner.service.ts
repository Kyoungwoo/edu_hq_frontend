import { NfcService } from 'src/app/basic/service/util/nfc.service';
import { QrService } from 'src/app/basic/service/util/qr.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor(
    private qr: QrService,
    private nfc: NfcService
  ) { }

  async open_qr(info_state:boolean = false){
    let return_state = {
      state: false,
      data: null
    };
    await this.qr.open(info_state).then((item) => {
      if(item) return_state.state = true;
    });

    return return_state;
  }

  async open_nfc(info_state:boolean = false){
    let return_state = {
      state: false,
      data: null
    };
    await this.nfc.open(info_state).then((item) => {
      if(item) return_state.state = true;
    });
    return return_state;
  }

  
}
