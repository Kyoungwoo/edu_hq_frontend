import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

@Component({
  selector: 'app-detail-search',
  templateUrl: './detail-search.component.html',
  styleUrls: ['./detail-search.component.scss'],
})
export class DetailSearchComponent implements OnInit {

  @Input() type:string;

  form = {
    project_id:this.user.userData.belong_data.project_id,
    master_company_id:this.user.userData.belong_data.master_company_id
  }

  disabled:boolean = false;

  constructor(
    private _modal: ModalController,
    private user: UserService,
    private toast: ToastService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.roleCheck();
  }

  roleCheck() {
   const { user_role, belong_data } = this.user.userData;
   
    if(user_role === 'MASTER_HEAD' || user_role === 'MASTER_GENERAL') {
      this.form.project_id = belong_data.project_id;
      this.form.master_company_id = belong_data.company_id;
      this.disabled = true;
    } else if(user_role === 'PARTNER_HEAD' || user_role === 'PARTNER_GENERAL') {
      this.form.project_id = belong_data.project_id;
      this.form.master_company_id = belong_data.company_id;
      this.disabled = true;
    }
  }
  search() {
    if(!this.form.project_id) return this.toast.present({message:'현장을 선택해주세요.', color:'warning'});
    if(!this.form.master_company_id) return this.toast.present({message:'원청사를 선택해주세요.', color:'warning'});
    this._modal.dismiss(this.form);
  }
}
