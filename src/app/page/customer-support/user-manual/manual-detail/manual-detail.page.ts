import { ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validator, ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { RegexService } from 'src/app/basic/service/util/regex.service';
import { environment } from 'src/environments/environment';
import { ManualEditPage, ManualUpdateForm } from '../manual-edit/manual-edit.page';

@Component({
  selector: 'app-manual-detail',
  templateUrl: './manual-detail.page.html',
  styleUrls: ['./manual-detail.page.scss'],
})
export class ManualDetailPage implements OnInit {
  @Input() manual_id:number;

  permission = {
    edit: false
  }

  form = new ManualUpdateForm();
  validator = new Validator(new ManualUpdateForm()).validator;
  res:ConnectResult;

  constructor(
    private el: ElementRef<HTMLElement>,
    private alert: AlertService,
    private connect: ConnectService,
    private nav: NavService,
    private date: DateService,
    private user: UserService,
    public regex: RegexService,
    private promise: PromiseService,
    private toast: ToastService,
    private _modal: ModalController,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    if(this.manual_id) {
      this.getPermission();

      this.form.manual_id = this.manual_id;
      this.get();
    } else {
      this.toast.present({ color: 'warning', message: '잘못된 접근입니다.' });
      this._modal.dismiss();
    }
    if(environment.test) this.test();
  }
  public async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.UserManual.test) return;

    const el = this.el.nativeElement;
    await this.promise.wait();
    
    if(this.permission.edit) {
      const editIndex = environment.test.UserManual.type.indexOf('EDIT');
      if(editIndex > -1) {
        // 수정
        el.querySelector('[name=edit]').dispatchEvent(new Event('click'));
        await this.promise.wait();
        await this.promise.toggleWait(async() => {
          const modal = await this._modal.getTop();
          const elEdit = modal.querySelector('app-manual-edit');
          return elEdit;
        });
        return;
      }

      const removeIndex = environment.test.UserManual.type.indexOf('REMOVE');
      if(removeIndex > -1) {
        // 삭제
        el.querySelector('[name=remove]').dispatchEvent(new Event('click'));
        await this.promise.wait();
        
        const alertButtons = document.querySelector('ion-alert').querySelectorAll('[type=button]');
        alertButtons[1].dispatchEvent(new Event('click'));
        return;
      }
    } else {
      // 닫기
      el.querySelector('name=dismiss').dispatchEvent(new Event('click'));
    }
  }

  private getPermission() {
    this.permission.edit = this.user.userData.user_role === 'LH_HEAD';
    console.log(this.permission);
  }

  private async get() {
    const res = await this.connect.run('/support/manual/get', {
      manual_id: this.form.manual_id
    }, {
      parse: ['ctgo_manual_ids', 'manual_ctgo_data', 'manual_file_data']
    });
    if(res.rsCode === 0) {
      this.form = {
        ...this.form,
        ...res.rsObj
      }
    } else {
      this.connect.error('error', res);
    }
  }

  public async remove() {
    this.alert.present({
      header: '사용자 메뉴얼 삭제',
      message: '사용자 메뉴얼을 삭제하시겠습니까?',
      buttons: [
        { text: '취소' },
        { text: '삭제', handler: async() => {
          const res = await this.connect.run('/support/manual/delete', {
            manual_ids: [this.form.manual_id]
          });
          if(res.rsCode === 0) {
            this._modal.dismiss(true);
          } else {
            this.toast.present({ color: 'warning', message: res.rsMsg });
          }
        }}
      ]
    });
  }

  public async edit() {
    const modal = await this._modal.create({
      component: ManualEditPage,
      componentProps: {
        manual_id: this.form.manual_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      setTimeout(() => {
        this._modal.dismiss(data);
      }, 100);
    }
  }
}
