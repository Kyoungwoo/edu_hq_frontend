import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FutItem } from 'src/app/basic/service/core/file.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { ManualDetailSearchPage, ManualListForm } from '../manual-detail-search/manual-detail-search.page';
import { ManualDetailPage } from '../manual-detail/manual-detail.page';
import { ManualEditPage } from '../manual-edit/manual-edit.page';


interface ManualListItem {
  company_id: number,
  company_name: string,
  create_date: string,
  create_user_id: number,
  create_user_name: string,
  ctgo_manual_name: string,
  manual_ctgo_data: {
    ctgo_manual_id: number,
    ctgo_manual_name: string
  }[],
  manual_file_data: FutItem[],
  manual_id: number,
  manual_text: string,
  manual_title: string,
  manual_views: number,
  pin_state: 0|1,
  update_date: string,
  update_user_id: number,
  update_user_name: string,
  row_count: number
}
@Component({
  selector: 'app-manual-list',
  templateUrl: './manual-list.page.html',
  styleUrls: ['./manual-list.page.scss']
})
export class ManualListPage implements OnInit {

  form = new ManualListForm();
  res:ConnectResult<ManualListItem>;

  permission = {
    edit: false
  }

  constructor(
    public user: UserService,
    private el: ElementRef<HTMLElement>,
    private _modal: ModalController,
    private connect: ConnectService,
    private date: DateService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.getPermission();

    this.form.start_date = this.date.today({ month: -1 });
    this.form.end_date = this.date.today();
    this.get();

    if(environment.test) this.test();
  }
  public async test() {
    if(!environment.test.core.test) return;
    if(!environment.test.UserManual.test) return;

    const el = this.el.nativeElement;
    await this.promise.wait();

    // 권한체크
    if(this.permission.edit) {
      const addIndex = environment.test.UserManual.type.indexOf('ADD');
      if(addIndex> -1) {
        //추가
        el.querySelector('[name=add]').dispatchEvent(new Event('click'));
        await this.promise.wait();
        await this.promise.toggleWait(async() => await this._modal.getTop());
        await this.promise.wait();

        environment.test.UserManual.type.splice(addIndex, 1);
      }
      
      const editIndex = environment.test.UserManual.type.indexOf('EDIT');
      if(editIndex > -1) {
        //가장 위엣놈 클릭 후 수정
        el.querySelector('[name=item]').dispatchEvent(new Event('click'));
        await this.promise.wait();
        await this.promise.toggleWait(async() => await this._modal.getTop());
        await this.promise.wait();

        environment.test.UserManual.type.splice(editIndex, 1);
      }
  
      const removeIndex = environment.test.UserManual.type.indexOf('REMOVE');
      if(removeIndex > -1) {
        // 가장 위앳놈 삭제
        el.querySelector('[name=item]').dispatchEvent(new Event('click'));
        await this.promise.wait();
        await this.promise.toggleWait(async() => await this._modal.getTop());
        environment.test.UserManual.type.splice(removeIndex, 1);
      }

      // 가장 위엣놈 즐겨찾기 삭제 및 새로고침
      el.querySelector('[name=pin_state]').dispatchEvent(new Event('click'));
      await this.promise.wait();
      el.querySelector('[name=search]').dispatchEvent(new Event('click'));
    }
  }

  private getPermission() {
    this.permission.edit = this.user.userData.user_role === 'LH_HEAD';
  }

  public async getMobile($event) {
    this.form.limit_no = this.res.rsMap.length;

    const res = await this.connect.run('/support/manual/list', this.form, {
      parse: ['manual_ctgo_data', 'manual_file_data']
    });
    if(res.rsCode === 0) {
      res.rsMap.forEach(item => {
        this.res.rsMap.push(item);
      });
    } else if(res.rsCode === 1008) {
      // 더 로딩할 데이터가 없음
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
    setTimeout(() => {
      $event.target.complete();
    }, 50);
  }
  public async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    
    const res = await this.connect.run('/support/manual/list', this.form, {
      parse: ['manual_ctgo_data', 'manual_file_data']
    });
    if(res.rsCode === 0) {
      this.res = res;
    } else if(res.rsCode === 1008) {
      if(!this.form.limit_no) this.toast.present({ color: 'warning', message: res.rsMsg });
      // else 더 로딩할 데이터가 없음
    } else {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }

  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: ManualDetailSearchPage,
      componentProps: {
        form: this.form
      }
    });
    modal.present();
    const { data } = await modal.onWillDismiss();
    if(data) {
      this.form = data;
      this.get(0);
    }
  }
  async edit(item?:ManualListItem) {
    const modal = await this._modal.create({
      component:ManualEditPage,
      componentProps: {
        manual_id: item?.manual_id
      }
    });
    modal.present();
    const { data } = await modal.onWillDismiss();
    if(data) {
      this.get();
    }
  }
  async detail(item:ManualListItem) {
    const modal = await this._modal.create({
      component:ManualDetailPage,
      componentProps: {
        manual_id: item?.manual_id
      }
    });
    modal.present();
    const { data } = await modal.onWillDismiss();
    if(data) {
      this.get();
    }
  }
  async pinStateChange($event:MouseEvent, item:ManualListItem) {
    $event.stopPropagation();

    item.pin_state = item.pin_state ? 0 : 1;
    const res = await this.connect.run('/support/manual/pin/insert', { 
      manual_id: item.manual_id,
      pin_state: item.pin_state
    });
    if(res.rsCode) {
      this.toast.present({ color: 'warning', message: res.rsMsg });
    }
  }
}