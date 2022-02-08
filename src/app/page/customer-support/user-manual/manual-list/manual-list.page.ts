import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
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
  res:ConnectResult;

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
    const el = this.el.nativeElement;
    await this.promise.wait();

    el.querySelector('[name=add]').dispatchEvent(new Event('click'));
  }
  public async get() {
    this.res = await this.connect.run('/support/manual/list', this.form)
  }
  public async openDetailSearch() {
    const modal = await this._modal.create({
      component: ManualDetailSearchPage,

    })
    modal.present();
  }
  async edit(item?) {
    const modal = await this._modal.create({
      component:ManualEditPage,
    });
    modal.present();
  }
  async favoritesCheck($event:MouseEvent, item) {
    $event.stopPropagation();
    item.favorites_state = item.favorites_state ? 0 : 1;
    const res = await this.connect.run('/board/notice/favorites', { notice_id:item.notice_id });
  }
}
