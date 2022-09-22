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
  }

  async getDevices() {
    console.log(this.project_id, 'wowo');
    const result  = await this.connect.run('/device/site/list/serial', {
      project_id: this.project_id,
      project_code: 'YRVN23',
      company_id: this.form.master_company_id,
      project_name: '극동건설(주)',
      page: 1,
      pageSize: 100,
    }, { contentType: ContentType.ApplicationJson, iot: true});

    if(result.rsCode === 0) {
      this.res = result;
    } else {
      this.toast.present({message:this.res.rsMsg});
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
