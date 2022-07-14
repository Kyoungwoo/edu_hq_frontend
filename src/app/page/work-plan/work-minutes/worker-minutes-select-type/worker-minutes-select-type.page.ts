import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { WorkerMinutesEditPage } from '../worker-minutes-edit/worker-minutes-edit.page';

@Component({
  selector: 'app-worker-minutes-select-type',
  templateUrl: './worker-minutes-select-type.page.html',
  styleUrls: ['./worker-minutes-select-type.page.scss'],
})
export class WorkerMinutesSelectTypePage implements OnInit {

  @Input() project_id:number;

  form = {
    safety_meeting_type: 0
  }

  constructor(
    private _modal: ModalController,
    private toast: ToastService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
  }

  async submit() {
    if(!this.form.safety_meeting_type) { this.toast.present({ message: '회의록 유형을 선택해주세요.' }); return; }
    await this._modal.dismiss();
    const modal = await this._modal.create({
      component: WorkerMinutesEditPage,
      componentProps: {
        project_id: this.project_id,
        safety_meeting_type: this.form.safety_meeting_type
      }
    });
    modal.present();
  }
}
