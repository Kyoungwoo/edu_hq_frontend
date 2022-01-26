import { Component, Input, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { DateService } from 'src/app/basic/service/util/date.service';

export class resObj {
  business_register_no: string;
  company_ceo: string
  company_file_data: null
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

  Ctgoconstruction:ConnectResult <{
    ctgo_construction_id: number,
    ctgo_construction_name: string,
    project_id: number
  }>
  constructor(
    private connect: ConnectService,
    private date:DateService
  ) { }

  ngOnInit() {
    if(this.company_id){
      this.getItem();
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
    this.resObj.consignee_consent_date = this.date.today();
  }

  async contSave() {
    if(this.emailaddress !== '직접입력') {
        this.resObj.manager_email = this.email + '@' + this.emailaddress;
    } else {
      this.resObj.manager_email = this.email + '@' + this.directlyInput;
    }
    // if(!this.form.consignee_consent_date) return this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.' })
    // if(!this.form.company_name) return this.toast.present({ message: '회사명을 입력해주세요.'});
    // if(!this.form.business_register_no) return this.toast.present({ message: '사업자등록번호를 입력해주세요.'});
    // if(!this.form.company_ceo) return this.toast.present({ message: '대표명을 입력해주세요.'});
    // // if(!this.form.company_file_data.length) return this.toast.present({ message: '파일을 입력해주세요.'});
    // this.form.manager_email = this.email + '@' + this.emailaddress;
    
    // this.alert.present({
    //   message: '저장하시겠습니까?',
    //   buttons: [
    //     { text: '아니오' },
    //     {
    //       text: '예',
    //       handler: async () => {
    //         const res = await this.connect.run('/project/company/masters/update', this.form, {});
    //         if (res.rsCode === 0) {
    //           this._modal.dismiss();
    //         }
    //       }
    //     }
    //   ]
    // })
  }

  async contDelete() {
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
    this.updateStatus = true;
  }
}
