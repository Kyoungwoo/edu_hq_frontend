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

  async open_qr(){
    let return_state = false;
    await this.qr.open().then((item) => {
      if(item) return_state = true;
    });

    return return_state;
  }

  open_nfc(){
    let return_state = false;
    this.nfc.open().then((item) => {
      if(item) return_state = true;
    });
    return return_state;
  }
}
