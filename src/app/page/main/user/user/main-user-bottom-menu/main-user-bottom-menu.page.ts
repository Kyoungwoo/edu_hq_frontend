import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { MsdsEditPage } from 'src/app/page/notice-board/msds/msds-edit/msds-edit.page';
import { NoticeEditPage } from 'src/app/page/notice-board/notice/notice-edit/notice-edit.page';
import { WorkerMinutesEditPage } from 'src/app/page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.page';

@Component({
  selector: 'app-main-user-bottom-menu',
  templateUrl: './main-user-bottom-menu.page.html',
  styleUrls: ['./main-user-bottom-menu.page.scss'],
})
export class MainUserBottomMenuPage implements OnInit {

  segment:string = '1';

  // @Input() project_id:number;
  // @Input() master_company_id:number;
  private _project_id:number = 0;
  @Input() set project_id(v:number) {
    if(this._project_id !== v) {
      this._project_id = v;
      this.getBoard();
    }
  }
  get project_id() { return this._project_id }

  private _master_company_id:number = 0;
  @Input() set master_company_id(v:number) {
    if(this._master_company_id !== v) {
      this._master_company_id = v;
      this.getBoard();
    }
  }
  get master_company_id() { return this._master_company_id }

  notice_count = 0; // 안읽은 공지사항
  msds_count: 0; // 안읽은 MSDS
  safetymeeting_count = 0; // 안읽은 회의록

  notice_list = []; // 공지사항
  msds_list = []; // msds
  safetymeeting_list = []; // 회의록

  constructor(
    private connect: ConnectService,
    private nav: NavService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    // this.getBoard();
  }

  getBoard(){
    this.getNotice();
    this.getMsds();
    this.getSafrtyMeeting();
  }

  /**
   * @function getNotice(): 공지사항 가져오기
   */
   async getNotice() {
    const res = await this.connect.run('/main/board/notice', {
      project_id: this.project_id,
      master_company_id: this.master_company_id
    });
    switch (res.rsCode) {
      case 0:
        this.notice_list = res.rsMap;
        this.notice_count = res.rsObj.read_count;
        break;
      default:
        this.notice_list = [];
        this.notice_count = 0;
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
  /**
   * @function getMsds(): MSDS 가져오기
   */
   async getMsds() {
    const res = await this.connect.run('/main/board/msds', {
      project_id: this.project_id
    });
    switch (res.rsCode) {
      case 0:
        this.msds_list = res.rsMap;
        // this.form.msds_count = res.rsObj.read_count;
        break;
      default:
        this.msds_list = [];
        this.notice_count = 0;
        // this.toast.present({ color: 'warning', message: res.rsMsg });
        break;
    }
  }
  /**
   * @function getSafrtyMeeting(): 회의록 가져오기
   */
   async getSafrtyMeeting() {
    const res = await this.connect.run('/main/board/safetymeeting', {
      project_id: this.project_id
    }, {});
    switch (res.rsCode) {
      case 0:
        this.safetymeeting_list = res.rsMap;
        this.safetymeeting_count = res.rsObj.read_count;
        break;
      default:
        this.safetymeeting_list = [];
        this.safetymeeting_count = 0;
        break;
    }
  }

  /** 
   * 하단 공지사항 리스트의 변화가 생기면서 위에 버튼이 클릭되는 현상!! 이 발생해서 딜레이를 줘야 한다.
   */
  routerTimeout = null;
  segmentChange() {
    clearTimeout(this.routerTimeout);
    this.routerTimeout = setTimeout(() => {
      document.body.style.pointerEvents = null;  
    }, 100);
    document.body.style.pointerEvents = 'none';
  }

  router(title:string) {
    switch(title) {
      case '공지사항':
        this.nav.navigateForward('/notice-list');
        break;
      case 'MSDS':
        this.nav.navigateForward('/msds-list');
        break;
      case '회의록':
        this.nav.navigateForward('/minutes-list');
        break;
    }
  }

  async openNotice(notice_id) {
    const modal = await this.modal.create({
      component: NoticeEditPage,
      componentProps: {
        notice_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      // 모바일은 편집이 없어서 이렇게해도 충분함. 있으면 추가 코드 작성을 해야함.
      this.getNotice();
    }
  }

  async openMsds(msds_id) {
    const modal = await this.modal.create({
      component: MsdsEditPage,
      componentProps: {
        msds_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      // 모바일은 편집이 없어서 이렇게해도 충분함. 있으면 추가 코드 작성을 해야함.
      this.getNotice();
    }
  }

  async openMeeting(safety_meeting_id) {
    const modal = await this.modal.create({
      component: WorkerMinutesEditPage,
      componentProps: {
        safety_meeting_id
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      // 모바일은 편집이 없어서 이렇게해도 충분함. 있으면 추가 코드 작성을 해야함.
      this.getNotice();
    }
  }
}
