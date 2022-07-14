import { ToastService } from './../../../../basic/service/ionic/toast.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { FileBlob, FileJson, FutItem } from 'src/app/basic/service/core/file.service';
import { Component, Input, OnInit } from '@angular/core';

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
  safety_meeting_date_week_day:string;
  safety_meeting_start_time:string;
  safety_meeting_end_time:string;

  safety_meeting_file_data: FutItem[] = [];
  file: (File|FileBlob)[] = [];
  file_json: FileJson = new FileJson();
}

@Component({
  selector: 'app-work-my-detail',
  templateUrl: './work-my-detail.page.html',
  styleUrls: ['./work-my-detail.page.scss'],
})
export class WorkMyDetailPage implements OnInit {
  /** 수정 시 필요한 ID */
  @Input() safety_meeting_id;

  /** 신규 작성시 필요한 정보 */
  @Input() project_id;
  @Input() safety_meeting_type;
  form = new EditItem();

  editable = {
    safetyMenu:1
  };

  constructor(
    private connect: ConnectService,
    private user: UserService,
    private toast: ToastService
  ) { }

  async ngOnInit() {
    this.form.safety_meeting_id = this.safety_meeting_id;
    await this.getDetail();
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
      // if(this.form.user_id === this.user.userData.user_id) this.editable.my_state = true;
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
    }
    else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

}
