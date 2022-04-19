import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from './../../../../basic/service/ionic/toast.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-qr-data',
  templateUrl: './heavy-qr-data.page.html',
  styleUrls: ['./heavy-qr-data.page.scss'],
})
export class HeavyQrDataPage implements OnInit {
  form = {
    ctgo_construction_id: 0,
    serial_use_state: 0,
    partner_company_name: '',
    rental_start_date: '',
    machinery_id: 0,
    project_name: '',
    rental_end_date: '',
    update_user_id: 0,
    project_id: 0,
    serial_id: 0,
    master_company_id: 0,
    rental_company_name: '',
    machinery_regist_no: '',
    create_date: '',
    create_user_id: 0,
    device_id: 0,
    serial_type: '',
    ctgo_construction_name: '',
    ctgo_machinery_id: 0,
    ctgo_machine_serial_name: '',
    master_company_name: '',
    update_date: '',
    partner_company_id: 0,
    rental_price: '',
    ctgo_machine_serial_id: 0,
    ctgo_machinery_name: '',
    return_state: 0,
    serial_no: '',
    return_date: 0,
  }

  constructor(
    private route: ActivatedRoute,
    private toast: ToastService,
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params?.device_id) {
        this.get(params.device_id);
      } else this.toast.present({message: '해당 장비의 데이터가 존재하지 않습니다.'});
    });
  }

  async get(id){
    const res = await this.connect.run('/device/machine/qr/list', {device_id: id});
    if (res.rsCode === 0) {
      this.form = res.rsObj;
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
}
