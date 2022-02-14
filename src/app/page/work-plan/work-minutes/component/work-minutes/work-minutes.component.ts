import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/basic/service/core/user.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

@Component({
  selector: 'app-work-minutes',
  templateUrl: './work-minutes.component.html',
  styleUrls: ['./work-minutes.component.scss'],
})
export class WorkMinutesComponent implements OnInit {

  safety_meeting_types

  constructor(
    private _modal: ModalController,
    private toast: ToastService,
    private user: UserService
  ) { }

  ngOnInit() {
    console.log(this.user.userData);
  }


  submit() {
    if(!this.safety_meeting_types) return this.toast.present({message:'회의록유형을 선택해주세요.',color:'danger'});
    this._modal.dismiss(this.safety_meeting_types);
  }
}
