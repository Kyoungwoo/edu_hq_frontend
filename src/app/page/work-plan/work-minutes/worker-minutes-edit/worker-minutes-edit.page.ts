import { QrSafetyInPage } from './../qr-safety-in/qr-safety-in.page';
import { PeopleDeleteComponent } from 'src/app/component/modal/people-delete/people-delete.component';
import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService, ConnectResult } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { LoadingService } from 'src/app/basic/service/ionic/loading.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { ApprovalBtnClickEvent } from 'src/app/component/confirm/approval/approval.component';
import { AnswerObj, CommentObj } from 'src/app/page/confirm/box/approval-edit/approval-edit.page';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';

export class EditItem {
  project_id:number;
  project_name: string;
  company_id:number;
  company_name: string;
  master_company_id:number;
  master_company_name: string;
  user_id:number;
  user_name:string;

  safety_meeting_id:number;
  safety_meeting_type: string;
  safety_meeting_type_full:string;
  safety_meeting_type_text: string;
  safety_meeting_date: string;
  safety_meeting_place: string;
  safety_meeting_content: string = '';
  safety_meeting_resolve: string = '';
  safety_meeting_etc: string = '';
  safety_meeting_state: string;
  create_date:string;
  create_date_week_day:string;
  safety_meeting_start_time:string;
  safety_meeting_end_time:string;

  safety_meeting_file_data: FutItem[] = [];
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
}

class attendantRes {
  create_user_id: number;
  account_id: string;
  company_id: number;
  user_id: string;
  user_name: string;
  company_name: string;
  safety_meeting_id: number;
  create_date: string;
}

@Component({
  selector: 'app-worker-minutes-edit',
  templateUrl: './worker-minutes-edit.page.html',
  styleUrls: ['./worker-minutes-edit.page.scss'],
})
export class WorkerMinutesEditPage implements OnInit {

  /** 수정 시 필요한 ID */
  @Input() safety_meeting_id;

  /** 신규 작성시 필요한 정보 */
  @Input() project_id;
  @Input() safety_meeting_type;
  form = new EditItem();
  res:ConnectResult<{
    create_user_id: number;
    company_id: number;
    user_id: string;
    user_name: string;
    company_name: string;
    education_safe_id: number;
    create_date: string;
    account_id:string;
    row_count:number;
    ctgo_occupation_name:string;
  }>

  attendantRes:ConnectResult<attendantRes>;

  attentForm = {
    safety_meeting_id:0,
    search_text:''
  }

  user_id = [];

  eduUpdate:boolean = false;

  // form = {
  //   project_id: null, // 현장ID
  //   project_name: null,
  //   company_id: null,
  //   master_company_id: null, // 회사ID
  //   master_company_name: null, // 회사 이름
  //   user_id: null, // 작성자 아이디

  //   safety_meeting_type: '직접입력', // 회의록 유형
  //   safety_meeting_type_text: '직접입력', // 회의록 유형 장문

  //   safety_meeting_date: null, // 회의록 일자
  //   safety_meeting_place: null, // 회의록 장소

  //   safety_meeting_content: null, // 회의록 협의내용
  //   safety_meeting_resolve: null, // 회의록 의결내용
  //   safety_meeting_etc: '', // 회의록 기타내용

  //   safety_meeting_state: '회의 전', // 회의 상태
    
  //   file_data: [] as FutItem[], //FUT
  //   file: [] as (File|FileBlob)[], // FILE
  //   file_json: new FileJson(), // JSON

  //   // 결재 값
  //   ctgo_approval_module_id: null,
  //   approval_cnt_answer: null, // 결재선 유형 - 임시저장 OR 결재중 -> 결재요청은 결재중 상태로 올려주세요. 두가지중 하나만 가능
  //   approval_default_data: [], // 결재선 값

  //   // 수정시 정보
  //   approval_id: null, // 결재 ID
  //   safety_meeting_id: null, // 회의록 ID
  //   user_name: null,

  //   create_date: null,
  //   create_date_week_day: null,

  //   safety_meeting_start_time: null, // 회의록 시작시간
  //   safety_meeting_end_time: null, // 회의록 종료시간
  // }

  permission = {
    edit: false
  }

  editable = {
    update:false,
    safetyMenu:1,
    menu_state: false,
    my_state: false
  };

  approval_answer:AnswerObj[];
  approval_comment:CommentObj[];

  safety_defualt = null;

  constructor(
    public user: UserService,
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController,
    private loading: LoadingService,
    private date: DateService,
    private alert: AlertService,
    public languagePack: LanguagePackService
  ) { }

  async ngOnInit() {
    if(!this.safety_meeting_id) {
      // 신규 작성 시, 디폴트 값을 가져옴
      this.editable.update = true;
      this.form.safety_meeting_state = '회의 전';
      this.form.safety_meeting_type_text = '직접입력';
      this.getDefaultForm(); // 폼으로 채우고
    }
    else {
      // 수정 시에는 정보를 가져와서 채워넣음
      this.form.safety_meeting_id = this.safety_meeting_id;
      await this.getDetail();
      this.getAttendList();
    }
    this.getDefaultContent(); // 기본 정보를 가지고 온다.
    // 나머지 정보
    // this.form.safety_meeting_type_text = this.getTypeText(this.form.safety_meeting_type);

    // 결재에는 ctgo_approval_module_id 가 반드시 필요하므로 유의
    // this.form.ctgo_approval_module_id = this.getApprovalModuleId(this.form.safety_meeting_type);
  }

  getDefaultForm() {
    const { user_name, belong_data } = this.user.userData;
    this.form.project_id = this.project_id;
    this.form.project_name = belong_data.project_name;
    this.form.master_company_id = belong_data.master_company_id;
    this.form.master_company_name = belong_data.master_company_name;
    this.form.company_id = belong_data.company_id;

    this.form.safety_meeting_type = this.safety_meeting_type;

    this.form.safety_meeting_date = this.date.today();
    this.form.create_date = this.date.today();
    
    this.form.user_name = user_name + ' / ' + belong_data.company_name;
  }

  /**
   * 기본 회의록 협의사항 가져오기
   */
   async getDefaultContent() {
    const res = await this.connect.run('/board/safety_meeting/default/get', {
      project_id: this.form.project_id,
      company_id: this.form.master_company_id
    });
    if(res.rsCode === 0) {
      this.safety_defualt = res.rsObj;
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  /**
   * 기본 회의록 협의사항 적용하기
   */
  async changeDefault(item) {
    switch(item) {
      case '안전':
        this.form.safety_meeting_content = this.safety_defualt.safety_default;
        break;
      case '노사':
        this.form.safety_meeting_content = this.safety_defualt.union_default;
        break;
      case '산업':
        this.form.safety_meeting_content = this.safety_defualt.health_default;
        break;
      case '직접입력':
        this.form.safety_meeting_content = '';
        break;
    }
  }

  /**
   * 회의록 정보 가져오기
   */
  async getDetail() {
    const res = await this.connect.run('/board/safety_meeting/detail', {
      safety_meeting_id: this.form.safety_meeting_id
    }, { parse: ['safety_meeting_file_data'] });
    if(res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
      if(this.form.user_id === this.user.userData.user_id) this.editable.my_state = true;
      this.form.user_name = this.form.user_name+' / '+this.form.master_company_name;
      this.form.safety_meeting_type_text = this.form.safety_meeting_type;
      if(this.form.safety_meeting_type_text !== '안전' &&
         this.form.safety_meeting_type_text !== '노사' &&
         this.form.safety_meeting_type_text !== '산업'){
          let theme_text_1 = this.form.safety_meeting_type_text;
          let theme_text_2 = this.form.safety_meeting_content;
          this.form.safety_meeting_type_text = '직접입력';
          setTimeout(() => {
            this.form.safety_meeting_type = theme_text_1;
            this.form.safety_meeting_content = theme_text_2;
          },100);
         }
        
      if(this.user.userData.user_id === this.form.user_id) this.editable.menu_state = true;

      if(this.form.user_id === this.user.userData.user_id) this.editable.my_state = true;
      // console.log(this.form.safety_meeting_type);
      // console.log('this.form - ', this.form);
      // console.log(this.form);
      // 정보를 가져온 후, 결재 정보를 가져와야 한다! => app-approval component가 알아서 자동으로 가져온다!
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  async getAttendList() {
    this.res = await this.connect.run('/board/safety_meeting/attendant/list',{
      safety_meeting_id:this.safety_meeting_id,
      search_text:this.attentForm.search_text
    });
    if(this.res.rsCode === 0) {
      this.user_id = [];
      this.res?.rsMap.map((data) => {
        this.user_id.push(data.user_id);
      });
      this.eduUpdate = true;
      console.log("this.eduUpdate - ",this.eduUpdate);
    } else if(this.res.rsCode === 1008){
      this.user_id = [];
    }
  }

  /**
   * 회의록 텍스트 가져오기
   */
  getTypeText(safety_meeting_type) {
    switch(safety_meeting_type) {
      case '안전':
        return '안전 및 보건에 관한 협의체 회의록';
      case '노사':
        return '노사 협의체 회의록';
      case '산업':
        return '산업안전보건위원회 회의록';
    }
  }
  /**
   * 회의록 결재선 아이디 가져오기
   */
  getApprovalModuleId(safety_meeting_type) {
    switch(safety_meeting_type) {
      case '안전':
        return 11;
      case '노사':
        return 10;
      case '산업':
        return 9;
    }
  }

  /** 
   * 삭제 버튼 클릭
   */
   async onDeleteClick(ev:ApprovalBtnClickEvent) {
    // 여기서는 딱히 처리할게 없음. 그냥 삭제 후 닫기.
    const res = await ev.delete();
    if(res.rsCode  === 0) {
      this._modal.dismiss();
      // 목록을 새로고침 해줘야 함
      window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
      window.dispatchEvent(new CustomEvent('approval-list:get()'));
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  async updateItem() {
    console.log("update - ", this.form);
    console.log("update - 1");
    if(this.form.safety_meeting_type_text === '직접입력'){
      if(!this.form.safety_meeting_type) return this.toast.present({message:'회의유형을 입력해 주세요.', color:'warning'});
    }
    if(!this.form.safety_meeting_date) return this.toast.present({message:'회의일을 선택해 주세요.', color:'warning'});
    if(!this.form.safety_meeting_place) return this.toast.present({message:'회의장소를 입력해 주세요.', color:'warning'});
    if(!this.form.safety_meeting_start_time) return this.toast.present({message:'회의시간을 설정해 주세요.', color:'warning'});
    if(!this.form.safety_meeting_end_time) return this.toast.present({message:'회의시간을 설정해 주세요.', color:'warning'});
    if(!this.form.safety_meeting_content) return this.toast.present({message:'협의사항을 입력해 주세요.', color:'warning'});
    let start_time = Number(this.form.safety_meeting_start_time.split(':')[0]+this.form.safety_meeting_start_time.split(':')[1]);
    let end_time = Number(this.form.safety_meeting_end_time.split(':')[0]+this.form.safety_meeting_end_time.split(':')[1]);
    if(start_time >= end_time) return this.toast.present({message:'교육종료시간을 교육시작시간보다 나중으로 해주세요.', color:'warning'});
    const alert = await this.alert.present({
      message:'수정하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler: async() => {
            const res = await this.connect.run('/board/safety_meeting/update', this.form);
            if(res.rsCode === 0) {
              this._modal.dismiss(true);
              this.toast.present({message:'수정되었습니다.',color:'primary'});
            } else {
              this.toast.present({message:res.rsMsg,color:'warning'})
            }
          }
        }
      ]
    });
    alert.present();
  }

  async submit() {
    if(this.form.safety_meeting_type_text === '직접입력'){
      if(!this.form.safety_meeting_type) return this.toast.present({message:'회의유형을 입력해 주세요.', color:'warning'});
    }
    if(!this.form.safety_meeting_place) return this.toast.present({message:'회의장소를 입력해 주세요.', color:'warning'});
    if(!this.form.safety_meeting_place) return this.toast.present({message:'회의장소를 입력해 주세요.', color:'warning'});
    if(!this.form.safety_meeting_start_time) return this.toast.present({message:'회의시간을 설정해 주세요.', color:'warning'});
    if(!this.form.safety_meeting_end_time) return this.toast.present({message:'회의시간을 설정해 주세요.', color:'warning'});
    if(!this.form.safety_meeting_content) return this.toast.present({message:'협의사항을 입력해 주세요.', color:'warning'});
    let start_time = Number(this.form.safety_meeting_start_time.split(':')[0]+this.form.safety_meeting_start_time.split(':')[1]);
    let end_time = Number(this.form.safety_meeting_end_time.split(':')[0]+this.form.safety_meeting_end_time.split(':')[1]);
    if(start_time >= end_time) return this.toast.present({message:'교육종료시간을 교육시작시간보다 나중으로 해주세요.', color:'warning'});
    const alert = await this.alert.present({
      message:'저장하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler: async() => {
            const res = await this.connect.run('/board/safety_meeting/insert',this.form);
            if(res.rsCode === 0) {
              this._modal.dismiss(true);
              this.toast.present({message:'저장되었습니다.',color:'primary'});
            } else {
              this.toast.present({message:res.rsMsg,color:'warning'});
            }
          }
        }
      ]
    });
    alert.present();
  }

  async deleteItem() {
    const alert = await this.alert.present({
      message:'삭제하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            const res = await this.connect.run('/board/safety_meeting/delete',{safety_meeting_ids:[this.safety_meeting_id]});
            if(res.rsCode === 0) {
              this.toast.present({message:'삭제되었습니다.',color:'primary'});
              this._modal.dismiss(true);
            }
          }
        }
      ]
    });
    alert.present();
  }
  // /**
  //  * 임시 저장버튼 클릭
  //  */
  // async onSaveClick(ev:ApprovalBtnClickEvent) {
  //   const approval_data = ev.approval_data;

  //   if(!this.form.safety_meeting_place) { this.toast.present({ color: 'warning', message: '회의 장소를 입력해주세요.' }); return; }
  //   if(!this.form.safety_meeting_content) { this.toast.present({ color: 'warning', message: '협의 사항을 입력해주세요.' }); return; }
  //   if(!this.form.safety_meeting_resolve) { this.toast.present({ color: 'warning', message: '의결 사항을 입력해주세요.' }); return; }

  //   // this.form.approval_cnt_answer = '임시저장';
  //   // this.form.approval_default_data = approval_data;

  //   let url = '';
  //   if(!this.form.safety_meeting_id) {
  //     url = '/board/safety_meeting/insert';
  //   }
  //   else {
  //     url = '/board/safety_meeting/update';
  //   }

  //   const res = await this.connect.run(url, this.form, { loading: true });

  //   if(res.rsCode === 0) {
  //     this.toast.present({ color: 'success', message: '임시저장 되었습니다.' });
  //     if(!this.form.safety_meeting_id) {
  //       // 신규 작성이었다면, approval_id와 safety_meeting_id 반환받아서 넣어줘야 임시저장 시, 새로 추가되는 것이 아닌 수정이 된다.
  //       // this.form.approval_id = res.rsObj.approval_id;
  //       this.form.safety_meeting_id = res.rsObj.safety_meeting_id;
  //       // 목록을 새로고침 해줘야 함
  //       window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
  //       window.dispatchEvent(new CustomEvent('approval-list:get()'));
  //     }
  //   }
  //   else {
  //     this.toast.present({ color: 'warning', message: res.rsMsg });
  //   }
  // }
  // /**
  //  * 결재 요청 버튼 클릭
  //  */
  // async onSendClick(ev:ApprovalBtnClickEvent) {
  //   const approval_data = ev.approval_data;

  //   if(!this.form.safety_meeting_place) { this.toast.present({ color: 'warning', message: '회의 장소를 입력해주세요.' }); return; }
  //   if(!this.form.safety_meeting_content) { this.toast.present({ color: 'warning', message: '협의 사항을 입력해주세요.' }); return; }
  //   if(!this.form.safety_meeting_resolve) { this.toast.present({ color: 'warning', message: '의결 사항을 입력해주세요.' }); return; }

  //   this.form.approval_cnt_answer = '결재중';
  //   this.form.approval_default_data = approval_data;

  //   if(!this.form.approval_id) {
  //     // 임시저장도 안한 상태에서는 insert에서 결재 요청을 처리한다.
  //     const res = await this.connect.run('/board/safety_meeting/insert', this.form, { loading: true });

  //     if(res.rsCode === 0) {
  //       this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
  //       this._modal.dismiss();
  //       // 목록을 새로고침 해줘야 함
  //       window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
  //       window.dispatchEvent(new CustomEvent('approval-list:get()'));
  //     }
  //     else {
  //       this.toast.present({ color: 'warning', message: res.rsMsg });
  //     }
  //   }
  //   else {
  //     /**
  //      * 임시저장을 한 상태에서는 approval에서 따로 결재 요청(ev.send()) 처리한다.
  //      * 순서상, update 후 결재 요청을 욜리는 것이 맞다고 생각된다.
  //      */
  //     const loading = await this.loading.present();
      
  //     const res = await this.connect.run('/board/safety_meeting/update', this.form);

  //     if(res.rsCode === 0) {
  //       const approvalRes = await ev.send();
  //       if(approvalRes.rsCode === 0) {
  //         this.toast.present({ color: 'success', message: '결재요청 되었습니다.' });
  //         this._modal.dismiss();
  //         // 목록을 새로고침 해줘야 함
  //         window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
  //         window.dispatchEvent(new CustomEvent('approval-list:get()'));
  //       }
  //       else {
  //         this.toast.present({ color: 'warning', message: approvalRes.rsMsg });  
  //       }
  //     }
  //     else {
  //       this.toast.present({ color: 'warning', message: res.rsMsg });
  //     }

  //     loading.dismiss();
  //   }
  // }
  // /** 
  //  * 결재 회수 버튼 클릭 
  //  */
  // async onRecoveryClick(ev:ApprovalBtnClickEvent) {
  //   const res = await ev.recovery();
  //   if(res.rsCode === 0) {
  //     // 목록을 새로고침 해줘야 함
  //     window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
  //     window.dispatchEvent(new CustomEvent('approval-list:get()'));
  //   }

  // }
  // /**
  //  * 결재 버튼 클릭
  //  */
  //  async onApprovalClick(ev:ApprovalBtnClickEvent) {
  //   const res = await ev.approval();
  //   if(res.rsCode === 0) {
  //     this.toast.present({ color: 'success', message: '결재 되었습니다.' });
  //     this._modal.dismiss();

  //     // 목록을 새로고침 해줘야 함
  //     window.dispatchEvent(new CustomEvent('worker-minutes-list:get()'));
  //     window.dispatchEvent(new CustomEvent('approval-list:get()'));
  //   }
  // }

  // /**
  //  * 결재 상태가 변할 때 행동
  //  */
  // onApprovalChange(ev:ApprovalBtnClickEvent) {
  //   if(ev.btnList.includes('임시저장')) {
  //     this.permission.edit = true;
  //   }
  //   else {
  //     this.permission.edit = false;
  //   }

  //   /** 결재자들을 가지고 온다.(모바일 화면 용) */
  //   this.approval_answer = ev.approval_data[0].answer_datas;
  //   /** 결재자 의견을 가지고 온다. */
  //   this.approval_comment = ev.approval_comment;
  //   /** 모바일 화면에서는 테이블 편집이 안된다. */
  //   if(window.innerWidth <= 768) {
  //     this.permission.edit = false;
  //   }
  // }

  changeType(item){
    console.log(this.form.safety_meeting_type_text);
    switch(item) {
      case '안전':
      case '노사':
      case '산업':
        this.form.safety_meeting_type = item;
        break;
      case '직접입력':
        this.form.safety_meeting_type = '';
        break;
    }
    this.changeDefault(item);
  }

  async userInfo(item) {
    const modal = await this._modal.create({
       component:PeopleDeleteComponent,
       componentProps:{
        item,
        ...{menu_state:this.editable.menu_state,my_state:this.editable.my_state, type: 'SAFE'}
       }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    console.log('userInfo outer - ', data);
    if(data) {
      console.log('userInfo inner - ', data);
      this.getAttendList();
    }
  }

  async safeAdd() {
    const modal = await this._modal.create({
      component:SearchAttendanceComponent,
      componentProps:{
        project_id: this.user.userData.belong_data.project_id,
        company_id: this.user.userData.belong_data.company_id,
        educationType: false,
        value: this.user_id,
        title: '근로자'
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.user_id = [];
      data.forEach(item => {
        if(!this.user_id.includes(item.user_id)) this.user_id.push(item.user_id)
      });
      const res = await this.connect.run('/board/safety_meeting/attendant/insert',{
        attendant_user_ids:this.user_id,
        safety_meeting_id:this.safety_meeting_id
      });
      if(res.rsCode === 0) {
        this.toast.present({message:'선택하신 인원이 출석되었습니다.',color:'primary'});
        this.getAttendList();
      } else {
        this.toast.present({message:res.rsMsg,color:'warning'});
      }
    }
  }

  async qrAdd() {
    const modal = await this._modal.create({
      component:QrSafetyInPage,
      componentProps: {
        item:this.form
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.getAttendList();
    }
  }
}
