import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

export class resObj {
  business_register_no: string;
  company_ceo: string;
  company_file_data: null;
  company_id: number;
  company_name: string;
  company_phone: string;
  consignee_consent_date: string;
  manager_email: string;
  manager_name: string;
  manager_phone: string;
}
@Component({
  selector: 'app-partner-edit',
  templateUrl: './partner-edit.page.html',
  styleUrls: ['./partner-edit.page.scss'],
})
export class PartnerEditPage implements OnInit {

  @Input() company_id;

  resObj:resObj = new resObj();
  updateStatus: boolean = false;
  savestatus:boolean = false;
  email:string;
  emailaddress:string
  directlyInput:string;
  resMap:Array <{
    contract_amount: string;
    contract_end_date: string;
    contract_name: string;
    contract_start_date: string;
    ctgo_construction_id: number;
    ctgo_construction_name: string;
    manager_user_id: number;
    manager_user_name: string;
    master_company_id: number;
    master_company_name: string;
    project_id: number;
    project_name: string;
  }> = [];

  selected_check = [];
  Ctgoconstruction:ConnectResult <{
    ctgo_construction_id: number,
    ctgo_construction_name: string,
    project_id: number
  }>
  constructor(
    private connect: ConnectService,
    private alert: AlertService,
    private date: DateService,
    private toast: ToastService,
    private _modal: ModalController,

  ) { }

  ngOnInit() {
    if(this.company_id){
      this.updateStatus = true;
      this.getItem();
    }
    else{
      this.savestatus = true;
    }
    this.getCtgoCon();
  
  }

  async getItem() {
    const res = await this.connect.run('/project/company/partner/detail',{company_id:this.company_id},{});
    if(res.rsCode === 0) {
      this.resMap = res.rsMap;
      this.resObj = res.rsObj;
      console.log("asdfasdfasdf",this.resObj);
     }
  }

  addContractInfo() {
    this.resMap.push(
      {
        contract_amount: '',
        contract_end_date: '',
        contract_name: '',
        contract_start_date: '',
        ctgo_construction_id: 0,        
        ctgo_construction_name: '',
        manager_user_id: 0,
        manager_user_name: '',
        master_company_id: 0,
        master_company_name: '',
        project_id: 0,
        project_name: ''     
      }
    )
  }
  async getCtgoCon() {
    this.Ctgoconstruction = await this.connect.run('/category/construction/get',{project_id:1});
    if(this.Ctgoconstruction.rsCode === 0) {

    }
  }
  agreement() {
    this.resObj.consignee_consent_date = this.date.today({},'SECOND');
  }

  async contSave() {
    console.log("----------------88888888",this.resObj);
    if(!this.resObj.consignee_consent_date) return this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.' })
    // if(!this.resObj.company_name) return this.toast.present({ message: '업체명을 입력해주세요.'});
    // if(!this.resObj.business_register_no) return this.toast.present({ message: '사업자등록번호를 입력해주세요.'});
    // if(!this.resObj.company_ceo) return this.toast.present({ message: '대표명을 입력해주세요.'});
    if(this.emailaddress !== '직접입력') {
        this.resObj.manager_email = this.email + '@' + this.emailaddress;
    } else {
      this.resObj.manager_email = this.email + '@' + this.directlyInput;
    }
    
    // if(!this.form.company_file_data.length) return this.toast.present({ message: '파일을 입력해주세요.'});
    // this.form.manager_email = this.email + '@' + this.emailaddress;
    
    const alert = await this.alert.present({
      message: '저장하시겠습니까?',
      buttons: [
        { text: '아니오' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/project/company/partner/insert', this.resObj, {});
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.connect.error('저장실패', res);
            }
          }
        }
      ]
    });
    alert.present();
  }

  async contDelete() {
    console.log("asdfasdfasdf",this.selected_check);
    // const alert = await this.alert.present({
    //   message: '삭제 하시겠습니까?',
    //   buttons: [
    //     { text: '아니요' },
    //     {
    //       text: '예',
    //       handler: async () => {
    //         const res = await this.connect.run('/project/company/masters/delete', {
    //           company_id: this.company_id,
    //           project_id: this.project_id
    //         });
    //         if (res.rsCode === 0) {
    //           this._modal.dismiss('Y');
    //         }
    //       }
    //     }
    //   ]
    // })
  }

  contUpdate() {
    //나중에 정규식으로 고침
    let spliteamil = this.resObj.manager_email.split('@');
    this.email = spliteamil[0];
    this.emailaddress = spliteamil[1];
    console.log(this.email)
    this.updateStatus = false;
  }
}
