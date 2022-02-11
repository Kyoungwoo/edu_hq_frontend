import {  Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';



export interface company_contract_data {
  ctgo_construction_id: number, //계약공종
  contract_name: string, //계약명
  contract_start_date: string, //계약기간~
  contract_end_date: string, //~계약기간
  contract_amount: string, //계약금액
  manager_user_id: number, //협력사소장
  master_company_id: number, //원청사ID
  project_id: number, //현장ID
} 

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
  company_contract_data: company_contract_data[] = [];
}
@Component({
  selector: 'app-partner-edit',
  templateUrl: './partner-edit.page.html',
  styleUrls: ['./partner-edit.page.scss'],
})
export class PartnerEditPage implements OnInit {
  
  @Input() company_id;
  @Input() project_id;
  @Input() type?: boolean = false;


  resObj:resObj = new resObj();
  updateStatus: boolean = false;
  savestatus: boolean = false;
  email: string;
  emailaddress: string;
  directlyInput: string;
  resMap:Array <{
    ctgo_construction_id: 0, // 계약공종
    contract_name: '', // 계약명
    contract_start_date: '', // 계약기간 ~
    contract_end_date: '', // ~ 계약기간
    contract_amount: '', // 계약금액
    manager_user_id: 0, // 협력사 소장
    master_company_id: 0, // 원청사 ID
    project_id: 0 // 현장 ID }
  }> = [];
  selectList = [];
  selected_check = [];
  res:ConnectResult <{
    checked: boolean;
    ctgo_construction_id: number,
    ctgo_construction_name: string,
    project_id: number,
    master_company_id: number,
    contract_name: string,
    contract_amount: number,
    contract_start_date: number,
    contract_end_date: number,
    business_register_no: string;
  }>

  constructor(
    private connect: ConnectService,
    private alert: AlertService,
    private date: DateService,
    private toast: ToastService,
    private _modal: ModalController,

  ) { }


  // [
  //   {
  //     "ctgo_construction_id":2,
  //     "contract_name":"dfasd",
  //     "contract_start_date":"2022-01-31",
  //     "contract_end_date":"2022-02-25",
  //     "contract_amount":"324234234",
  //     "manager_user_id":0,
  //     "master_company_id":3366458717,
  //     "project_id":8
  //   }
  // ]
  // [
  //   {
  //     "ctgo_construction_id":0, // 계약공종
  //   "contract_name":"따따따", // 계약명
  //   "contract_start_date":"2021-01-01", // 계약기간 ~
  //   "contract_end_date":"2022-12-01", // ~ 계약기간
  //   "contract_amount":1000000, // 계약금액
  //   "manager_user_id":0, // 협력사 소장
  //   "company_id":4, // 원청사 ID
  //   "project_id":59 // 현장 ID 
  //   }
  // ]
  ngOnInit() {
    this.getItem();
    console.log('input company',this.company_id);
    console.log('resObj company',this.resObj.company_id);
    if(this.company_id){
      
      this.updateStatus = true;
    }
    else{
      this.savestatus = true;
    }
    this.getCtgoCon();
  }

  async getItem() {
    const res = await this.connect.run('/project/company/partner/detail',
    {company_id:this.company_id},{});
    if(res.rsCode === 0) {
      this.resMap = res.rsMap;
      this.resObj = res.rsObj;
      console.log("asdfasdfasdf",this.resObj);
     }
  }

  test(ev) {
    console.log("ev",ev.business_register_no);
    this.resObj.company_id = ev.company_id;
    this.resObj.business_register_no = ev.business_register_no;
    this.resObj.company_ceo = ev.company_ceo;
    console.log(this.resObj);
    console.log(this.resObj.business_register_no);
    console.log(this.resObj.company_ceo);
  }
  addContractInfo() {
    this.resMap.push(
      {
        ctgo_construction_id:0, // 계약공종
        contract_name:'', // 계약명
        contract_start_date:'', // 계약기간 ~
        contract_end_date:'', // ~ 계약기간
        contract_amount:'', // 계약금액
        manager_user_id:0, // 협력사 소장
        master_company_id:0, // 원청사 ID
        project_id:0 // 현장 ID }
      }
    )
  }
  async getCtgoCon() {
    this.res = await this.connect.run('/category/construction/get',{project_id:1});
    if(this.res.rsCode === 0) {

    }
  }
  agreement() {
    this.resObj.consignee_consent_date = this.date.today({},'SECOND');
  }

  async contSave() {
    let contractInfo = [];
    this.resMap.forEach(item => {
      contractInfo.push(item);
    });
    this.resObj.company_contract_data = contractInfo;
    if(!this.resObj.consignee_consent_date) return this.toast.present({ message: '개인정보 처리 위탁 동의를 해주시기 바랍니다.',color:'danger' })
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
            const res = await this.connect.run('/project/company/partner/update', this.resObj, {});
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            }
          }
        }
      ]
    });
    alert.present();
  }

  async contDelete() {
    console.log("asdfasdfasdf",this.selected_check);
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/project/company/partner/delete', {
              company_id: this.company_id,
              project_id: this.project_id
            });
            if (res.rsCode === 0) {
              this._modal.dismiss('Y');
            }
          }
        }
      ]
    })
    alert.present();
  }

  async contUpdate() {
    //나중에 정규식으로 고침
    let spliteamil = this.resObj.manager_email.split('@');
    this.email = spliteamil[0];
    this.emailaddress = spliteamil[1];
    console.log(this.email)
    this.updateStatus = false;
 
  }
  

  async selectDelete() {
    const list = this.resMap
    console.log(this.selectList);
    this.selectList.forEach(checkedItem => {
      console.log("checkedItem",checkedItem);
        list.splice(checkedItem, 1);
    });
    this.selectList = [];
    // const alert = await this.alert.present({
    //   message: '삭제 하시겠습니까?',
    //   buttons: [
    //     { text: '아니요' },
    //     {
    //       text: '예',
    //       handler: async () => {
    //             for (let i = 0; i < this.selectList.length; i++) {
    //               const res = await this.connect.run('/project/company/masters/delete', {
    //                 project_id: this.res.project_id
    //               });
    //               if (res.rsCode === 0) { this.getCtgoCon() };
    //             }
    //         }
    //       }
        
    //   ]
    // });
    // alert.present();
  }
}
