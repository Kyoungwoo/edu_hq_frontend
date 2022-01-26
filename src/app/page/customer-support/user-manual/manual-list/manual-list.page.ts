import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';
import { environment } from 'src/environments/environment';
import { ManualDetailSearchPage } from '../manual-detail-search/manual-detail-search.page';
import { ManualEditPage } from '../manual-edit/manual-edit.page';

class MenualListForm {
  ctgo_manual_ids:string = null; // 사용자 매뉴얼 구분 ID
  end_date:string = null; // 작성검색종료일
  start_date:string = null; // 작성검색시작일
  search_text:string = null; // 검색어(제목)
}
@Component({
  selector: 'app-manual-list',
  templateUrl: './manual-list.page.html',
  styleUrls: ['./manual-list.page.scss'],
})
export class ManualListPage implements OnInit {

  form = new MenualListForm();
  res:ConnectResult;

  constructor(
    private el: ElementRef<HTMLElement>,
    private _modal: ModalController,
    private connect: ConnectService,
    private promise: PromiseService,
    private changeDetector: ChangeDetectorRef,
    private toast: ToastService
  ) { }

  ngOnInit() {
    this.get();

    if(environment.test) this.test();
  }
  public async test() {

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
