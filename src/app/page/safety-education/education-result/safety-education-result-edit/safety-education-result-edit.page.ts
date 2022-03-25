import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';

export class getEducationItem {
  create_user_name: string;
  education_safe_text: string;
  education_safe_report_id: number;
  ctgo_approval_module_id: number;
  company_id: number;
  ctgo_approval_module_name: string;
  approval_id: number;
  education_safe_report_text: string;
  education_safe_report_file_data: FutItem[] = [];
  create_user_id: number;
  ctgo_education_safe_name: string;
  ctgo_education_safe_id: number;
  user_name: string;
  education_safe_state: string;
  ctgo_education_safe_text: string;
  education_safe_target: string;
  ctgo_education_safe_type: string;
  project_name: string;
  education_safe_manager_names: string;
  education_safe_place: string;
  education_safe_date: string;
  education_safe_start_time: string;
  ctgo_education_safe_title: string;
  project_id: number;
  education_safe_end_time: string;
  company_name: string;
  education_safe_id: number;
  create_date: string;
  education_safe_report_instructor: string;
  education_safe_manager_ids: string
  education_all_tiem:string;
  education_safe_time:string;
  approval_cnt_answer:string; // 결재선 유형 - 임시저장 OR 결재중 -> 결재요청은 결재중으로 올려주세요 두가지중 하나만 가능
  approval_default_data:
  {
    default_type:string;
    answer_datas:[{
      approval_order_no: number,
      approval_last_state: number,
      answer_user_id: number
    }];
    refer_datas:[{
      refer_user_id: number
    }];
  }[] = [];
  file:(File|FileBlob)[] = []; // FILE
  file_json:FileJson = new FileJson(); // JSON
}
@Component({
  selector: 'app-safety-education-result-edit',
  templateUrl: './safety-education-result-edit.page.html',
  styleUrls: ['./safety-education-result-edit.page.scss'],
  animations: [ fadeInAnimation ]

})
export class SafetyEducationResultEditPage implements OnInit {

  @Input() item;
  @Input() editItem;

  approvalView:boolean = false;
  approvalDocument:boolean = false;
  res:ConnectResult<{
    education_safe_report_id: number,
    education_safe_id: number,
    create_date: string,
    company_id: number,
    user_id: number,
    company_name: string,
    user_name:string
  }>;

  getDetilItem = new getEducationItem();

  disabled:boolean = false;
  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private date: DateService,
    private user: UserService,
    private resultmodal: ModalController
  ) { }

  ngOnInit() {
    this.getDetilItem.education_safe_id = this.item?.education_safe_id;
    if(this.item) {
      this.basicDetail();
    }
    if(this.editItem) {
      this.disabled = true;
      this.basicDetail();
      this.reportList();
      this.getItem();
    }
  }
  
  //기본 데이터
  async basicDetail() {
    this.getDetilItem.approval_default_data.push({
      default_type:'REFER',
      answer_datas:[{
        answer_user_id:this.user.userData.user_id,
        approval_last_state:0,
        approval_order_no:1
      }],
      refer_datas:[{
        refer_user_id:this.user.userData.user_id
      }]
    });
    
    const res = await this.connect.run('/education/detail',{education_safe_id:this.item?.education_safe_id | this.editItem?.education_safe_id},{
      parse:['education_safe_manager_names','education_safe_manager_ids']
    });
    if(res.rsCode === 0) {
      this.getDetilItem = {
        ...this.getDetilItem,
        ...res.rsObj
      }

      const rsObj = this.getDetilItem;
      rsObj.create_date = `${rsObj.create_date} (${this.date.day(rsObj.create_date)[0]})`;
      rsObj.education_safe_date = `${rsObj.education_safe_date} (${this.date.day(rsObj.education_safe_date)[0]})`;
      rsObj.education_all_tiem =  `${rsObj.education_safe_start_time} ~ ${rsObj.education_safe_end_time} (${rsObj.education_safe_time}H)`;
    } else {
      this.toast.present({message:res.rsMsg, color:'warning'});
    }
  }

  //교육 상세보기
  async getItem() {
    const res = await this.connect.run('/education/report/get',{education_safe_report_id:this.editItem.education_safe_report_id},{
      parse:['education_safe_report_file_data']
    })
    if(res.rsCode === 0) {
      this.getDetilItem = {
        ...this.getDetilItem,
        ...res.rsObj
      }
    }
  }

  //신규 교육 등록
  async edit(approval_cnt_answer) {
    this.getDetilItem.approval_cnt_answer = approval_cnt_answer;
    let method = '';
    if(this.item) {
      method = '/education/report/insert'
    } else {
      method = '/education/report/update'
    }

      //결제부분
    // this.form.approval_default_data.push({
    //   default_type:'REFER',
    //   answer_datas:[{
    //     answer_user_id:this.user.userData.user_id,
    //     approval_last_state:0,
    //     approval_order_no:1
    //   }],
    //   refer_datas:[{
    //     refer_user_id:this.user.userData.user_id
    //   }]
    // });

    console.log(this.getDetilItem);
    console.log(method);
    if(!this.getDetilItem.education_safe_report_instructor) return this.toast.present({message:'강사명이 없습니다.', color:'warning'});
    if(!this.getDetilItem.education_safe_report_text) return this.toast.present({message:'결과 보고를 작성해 주세요.', color:'warning'});
    const res = await this.connect.run(method,this.getDetilItem);
    if(res.rsCode === 0) {
      this.toast.present({message:'저장되었습니다.', color:'primary'});
      this.resultmodal.dismiss(true);
    } else {
      this.toast.present({message:res.rsMsg, color:'warning'});
    }
  }

  //참석자 목록
  async reportList() {
    this.res = await this.connect.run('/education/report/attendant/list',{education_safe_report_id:this.editItem.education_safe_report_id});
    if(this.res.rsCode !== 0) {
      this.toast.present({message:this.res.rsMsg, color:'warning'});
    }
  }

  async approvalGet() {
    
  }
}
