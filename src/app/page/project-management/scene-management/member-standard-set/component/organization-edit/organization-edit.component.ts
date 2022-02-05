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
  @Input() level:string;
  
  level1 = {
      hq_regional_code:0,
      hq_regional_entire_state:0,
      hq_regional_name:'',
      hq_regional_use_state:0
    }
  level2 ={
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


  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private alert: AlertService
  ) { }

  ngOnInit() {
    console.log("this.selectList",this.selectList);
    console.log("this.selectList",this.level);
    if(this.level === 'level1') {
      this.level1 = this.selectList[0];
      console.log('inptuselect',this.level1);
    }
    if(this.level === 'level2') {
      this.level2 = this.selectList[0];
      console.log('inptuselect',this.level1);
    }
    if(this.level === 'level3') {
      this.level3 = this.selectList[0];
      console.log('inptuselect',this.level1);
    }
  }

  dismiss(){
    this._modal.dismiss();
  }
  async addOrganization(){
    console.log(this.level1);
    const alert = await this.alert.present({
      message:'적용 하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler: async() =>{
            console.log(this.level1);
            const res = await this.connect.run('/project/organization/regional/insert',this.level1,{});
            if(res.rsCode === 0) {
              this._modal.dismiss('level1');
            }
          }
        }
      ]
    });
    alert.present();
  }
}
