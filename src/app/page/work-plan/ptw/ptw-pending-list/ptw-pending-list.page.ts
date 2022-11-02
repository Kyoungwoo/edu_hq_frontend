import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { ApprovalAnswerType } from 'src/app/component/confirm/approval/approval.component';
import { ptwList } from '../../../../dumi/test-ptw-unconfirm';

@Component({
  selector: 'app-ptw-pending-list',
  templateUrl: './ptw-pending-list.page.html',
  styleUrls: ['./ptw-pending-list.page.scss'],
})


export class PtwPendingListPage implements OnInit {
  ptwList = ptwList;
  approval_cnt_answer:ApprovalAnswerType = "임시저장";

  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private _modal: ModalController,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {

  }


}
