import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { FutItem } from 'src/app/basic/service/core/file.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { DateService } from 'src/app/basic/service/util/date.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { ManualDetailSearchPage } from '../manual-detail-search/manual-detail-search.page';
import { ManualEditPage } from '../manual-edit/manual-edit.page';

class MenualListForm {
  ctgo_manual_ids:number[] = []; // 사용자 매뉴얼 구분 ID
  start_date:string = null; // 작성검색시작일
  end_date:string = null; // 작성검색종료일
  search_text:string = ''; // 검색어(제목)
  limit_no:number = 0; //
}
interface MenualListItem {
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
  update_user_name: string
}
@Component({
  selector: 'app-manual-list',
  templateUrl: './manual-list.page.html',
  styleUrls: ['./manual-list.page.scss']
})
export class ManualListPage implements OnInit {

  form = new MenualListForm();
  resMenualCtgo:ConnectResult<{
    ctgo_manual_id: number,
    ctgo_manual_name: string
  }>;
  res:ConnectResult<MenualListItem>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private _modal: ModalController,
    private connect: ConnectService,
    private date: DateService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef,
    private toast: ToastService
  ) { }

  ngOnInit() {
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

    // el.querySelector('[name=add]').dispatchEvent(new Event('click'));
  }
  public async get() {
    this.res = await this.connect.run('/support/manual/list', this.form, {
      parse: ['manual_ctgo_data']
    });
  }
  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: ManualDetailSearchPage,

    })
    modal.present();
  }
  async edit(item?:MenualListItem) {
    const modal = await this._modal.create({
      component:ManualEditPage,
      componentProps: {
        manual_id: item?.manual_id
      }
    });
    modal.present();
  }
  async favoritesCheck($event:MouseEvent, item) {
    $event.stopPropagation();
    item.favorites_state = item.favorites_state ? 0 : 1;
    const res = await this.connect.run('/board/notice/favorites', { notice_id:item.notice_id });
  }
}
