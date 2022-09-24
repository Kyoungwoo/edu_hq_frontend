import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService, ContentType } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DeviceData } from '../../select/select-device-id/select-device-id.component';


@Component({
  selector: 'app-search-device-id',
  templateUrl: './search-device-id.component.html',
  styleUrls: ['./search-device-id.component.scss'],
})

export class SearchDeviceIdComponent implements OnInit {

  @Input() project_id;
  @Input() master_company_id;

  selected;

  form = {
    project_id:0,
    master_company_id:0,
    device_type:0,
    search_text:''
  };

  res: ConnectResult<any>;
  biconRes: ConnectResult<any>;
  biconlist: ConnectResult<any>;

  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private modal: ModalController
  ) { }

  async ngOnInit() {
    if(this.project_id) this.form.project_id = this.project_id;
    if(this.master_company_id) this.form.master_company_id = this.master_company_id;
    // this.form.project_id = 58;
    await this.getDevices();
    // setTimeout(() => {
    //   this.getBiconList();
    // }, 300);    
  }

  async getDevices() {
    const res = await this.connect.run('/serial/user/list',
    {
      company_id: 0,
      master_company_id: 0,
      partner_company_id: 0,
      project_id: this.project_id,
      ctgo_machine_serial_id: 0,
      search_text: '',
      limit_no: 0
    },
    { parse: ['user_data'] });    

    const serial_bicon_list = res.rsMap
      .filter((item) => item.serial_bicon !== '')
      .map((item) => item.serial_bicon);
    // console.log("serial_bicon_list ====" + serial_bicon_list);

    // console.log(this.project_id, 'wowo');
    const result  = await this.connect.run('/device/site/list/serial', {
      project_id: this.project_id,
      page: 1,
      pageSize: 50,
    }, { contentType: ContentType.ApplicationJson, iot: true});
    
    if(result.rsCode === 0) {
      this.res = result;
      this.res.rsMap = result.rsMap.filter(
        (item) => serial_bicon_list.includes(item.deviceNum) === false
      ).map((item) => item);
    } else {
      ;//this.toast.present({message:this.res.rsMsg});
    }
  }

  async handleItemClick(item: DeviceData) {
    this.selected = item;
  }
  submit() {
    // if(!this.form.ctgo_area_risk_id) return this.toast.present({message:'위험지역 유형을 선택해주세요.',color:'warning'});


    if(!this.selected) {
      return this.toast.present({message:'선택한 항목이 없습니다.',color:'warning'});
    }

    this.modal.dismiss(this.selected);
  }

  closeBtn(){
    this.modal.dismiss();
  }
}
