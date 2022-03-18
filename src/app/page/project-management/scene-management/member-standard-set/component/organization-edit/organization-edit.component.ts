import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.scss'],
})
export class OrganizationEditComponent implements OnInit {

  @Input() selectList;
  @Input() level: string;

  level1 = {
    hq_regional_code: '',
    hq_regional_entire_state: 0,
    hq_regional_name: '',
    hq_regional_id: 0,
    hq_regional_use_state: 0
  }
  
  level2 = {
    hq_business_code: "",
    hq_business_entire_state: 0,
    hq_business_id: 0,
    hq_business_name: "",
    hq_business_use_state: 0,
    hq_regional_id: 0
  }

  level3 = {
    hq_business_id: 0,
    hq_department_code: '',
    hq_department_id: 0,
    hq_department_name: '',
    hq_department_use_state: 0,
    hq_regional_id: 6,
    hq_regional_name: ''
  }
  title = '';

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private alert: AlertService
  ) { }

  ngOnInit() {
    console.log("this.selectList", this.selectList);
    if (this.selectList) {
      this.title = '수정';
      if (this.level === 'level1') {
        this.level1 = this.selectList;
        console.log('inptuselect', this.level1);
      }
      if (this.level === 'level2') {
        this.level2 = this.selectList;
        console.log('inptuselect', this.level1);
      }
      if (this.level === 'level3') {
        this.level3 = this.selectList;
        console.log('inptuselect', this.level1);
      }
    } else this.title = '추가'
  }

  dismiss() {
    this._modal.dismiss();
  }
  async addOrganization() {
    console.log(this.level);
    const alert = await this.alert.present({
      message: `${this.title} 하시겠습니까?`,
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            if (this.level === 'level1') {
              console.log(this.level1);
              const res = await this.connect.run(
                this.title === '추가' ? '/project/organization/regional/insert' : '/project/organization/regional/update'
                , this.level1, {});
              if (res.rsCode === 0) {
                this._modal.dismiss('level1');
              }
            }
            if (this.level === 'level2') {
              const res = await this.connect.run(
                this.title === '추가' ? '/project/organization/business/insert' : '/project/organization/business/update'
                , this.level2, {});
              if (res.rsCode === 0) {
                this._modal.dismiss('level2');
              }
            }
            if (this.level === 'level3') {
              const res = await this.connect.run(
                this.title === '추가' ? '/project/organization/department/insert' : '/project/organization/department/update'
                , this.level3, {});
              if (res.rsCode === 0) {
                this._modal.dismiss('level3');
              }
            }
          }
        }
      ]
    });
    alert.present();
  }
}
