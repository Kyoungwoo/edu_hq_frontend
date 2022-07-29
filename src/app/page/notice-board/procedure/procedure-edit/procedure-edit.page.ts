import { LanguagePackService } from './../../../../basic/service/core/language-pack.service';
import { AlertService } from './../../../../basic/service/ionic/alert.service';
import { DateService } from './../../../../basic/service/util/date.service';
import { UserService } from './../../../../basic/service/core/user.service';
import { ToastService } from './../../../../basic/service/ionic/toast.service';
import { ModalController } from '@ionic/angular';
import { Validator, ConnectService } from './../../../../basic/service/core/connect.service';
import { FutItem, FileBlob, FileJson, FileService } from './../../../../basic/service/core/file.service';
import { Component, Input, OnInit } from '@angular/core';
export class ProcedureItem {
  company_id: number;
  company_name: string;
  project_id: number;
  project_name: string;
  work_procedure_id:number;
  work_procedure_title: string;
  work_procedure_text: string;
  work_procedure_language: string;

  work_procedure_file_data: FutItem[] = [];
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
  create_user_id: number;
  create_user_name: string;
  master_company_id: number;
  create_date: string;
}

@Component({
  selector: 'app-procedure-edit',
  templateUrl: './procedure-edit.page.html',
  styleUrls: ['./procedure-edit.page.scss'],
})
export class ProcedureEditPage implements OnInit {

  update_state = false;

  permission = {
    edit: false
  }

  // @ViewChild('noticeText') noticeText:SmarteditComponent;

  @Input() work_procedure_id;
  @Input() searchForm;

  form:ProcedureItem = new ProcedureItem();

  title:string;

  validator = new Validator(new ProcedureItem()).validator;

  useNotice:boolean = false;

  constructor(
    private connect: ConnectService,
    private _modal: ModalController,
    private toast: ToastService,
    public user: UserService,
    private date: DateService,
    private alert: AlertService,
    private file: FileService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    // if(this.user.userData.belong_data.company_contract_type === 'LH') { 
    //   this.form.project_id = 0;
    // }
    // this.getPermission();
    if(this.work_procedure_id) {
      this.title = '상세';
      this.get();
    } else {
      this.update_state = true;
      this.getForm();
      this.title = '등록';
    }
  }

  // getPermission() {
  //   const company_contract_type = this.user.userData.belong_data.company_contract_type;
  //   if(company_contract_type === 'LH'
  //   || company_contract_type === '원청사') {
  //     this.permission.edit = true;
  //   } else {
  //     this.permission.edit = false;
  //   }
  // }
  getForm() {
    const { user_name, belong_data } = this.user.userData;

    if(this.searchForm) {
      console.log('if - ', this.form);
      this.form.project_id = this.searchForm.project_id;
      this.form.master_company_id = this.searchForm.master_company_id;
    }
    else {
      console.log('else - ', this.form);
      this.form.project_id = belong_data.project_id;
      this.form.master_company_id = belong_data.master_company_id ? belong_data.master_company_id : belong_data.company_id;
    }

    this.form.company_id = belong_data.company_id;
    this.form.company_name = belong_data.company_name;
    this.form.create_user_name = user_name;
    this.form.create_date = this.date.today();
  }

  async get() { //상세보기
    const res = await this.connect.run('/board/work_procedure/detail', { 
      work_procedure_id: this.work_procedure_id 
    }, { loading: true, parse: ['work_procedure_file_data'] });
    if(res.rsCode ===  0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      } 
      if(this.user.userData.user_id === this.form.create_user_id) {
        this.useNotice = true;
      }
      // const scopeOne = this.noticeRange.list1.find(item => item.value === this.form.public_scope_one);
      // const scopeTwo = this.noticeRange.list2.find(item => item.value === this.form.public_scope_two);
      // this.rangeText = `${scopeOne.text},${scopeTwo.text},${this.form.scope_company_name ? this.form.scope_company_name : ''}`;
      // if(!this.form.scope_company_name) {
      //   this.rangeText.substring(1,this.rangeText.length -1);
      // }
    }
  }

  public submit() {
    // this.noticeText.update();
    
    if(this.form.work_procedure_id) this.update();
    else this.noticeInsert();
  }

  async noticeInsert() { //등록
    if(!this.form.project_id) return this.toast.present({message:'현장명을 입력해주세요.',color:'warning'});
    if(!this.form.work_procedure_language) return this.toast.present({message:'언어를 선택해주세요.',color:'warning'});

    //메소드 호출
    const alert = await this.alert.present({
      message:'등록 하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            const res = await this.connect.run('/board/work_procedure/insert', this.form);
            if(res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    });
    alert.present();
  }
  async update() { //수정
    if(!this.form.project_id) return this.toast.present({message:'현장명을 입력해주세요.',color:'warning'});
    if(!this.form.work_procedure_language) return this.toast.present({message:'언어를 선택해주세요.',color:'warning'});
    
    const alert = await this.alert.present({
      message:'수정 하시겠습니까?',
      buttons:[
        {text:'아니요'},
        {text:'예',
          handler:async() => {
            const res = await this.connect.run('/board/work_procedure/update', this.form);
            if(res.rsCode === 0) {
              this.update_state = false;
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    });
  }
  async Delete() {
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const res = await this.connect.run('/board/work_procedure/delete', {
              work_procedure_id: this.work_procedure_id
            });
            if (res.rsCode === 0) {
              this._modal.dismiss('Y');
            } else {
              this.toast.present({ color: 'warning', message: res.rsMsg });
            }
          }
        }
      ]
    })
  }

  dismiss() {
    this._modal.dismiss();
  }

  updateButton(){
    if(this.update_state) this.submit();
    else this.update_state = true;
  }
}
