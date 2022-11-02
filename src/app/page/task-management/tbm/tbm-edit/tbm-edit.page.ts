import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TbmUnitPage } from '../tbm-unit/tbm-unit.page';
import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';
import { QrEducationInPage } from '../../../safety-education/educatiion-status/qr-education-in/qr-education-in.page';
import { ScannerService } from '../../../../basic/service/util/scanner.service';
import { QrSafetyInPage } from '../../../work-plan/work-minutes/qr-safety-in/qr-safety-in.page';
import { TbmRegistrationPage } from '../tbm-registration/tbm-registration.page';
import { SearchPeopleComponent } from '../../../../component/modal/search-people/search-people.component'
import { PeopleDeleteComponent } from 'src/app/component/modal/people-delete/people-delete.component';

@Component({
  selector: 'app-tbm-edit',
  templateUrl: './tbm-edit.page.html',
  styleUrls: ['./tbm-edit.page.scss'],
})
export class TbmEditPage implements OnInit {
  editable ={
    add:true,
    company_id:true,
    my_state: true
  }
  
  constructor(
    private _modal: ModalController,
    private scanner: ScannerService,
    // private alert: AlertService,
  ) {
  }

  ngOnInit() {
    this.tab();
  }

  QRscanner(){
    this.scanner.init();
    // this.qr.open();
  }

  async qrModal() {
    const modal = await this._modal.create({
      component:QrSafetyInPage,
      // componentProps: {
      //   item:this.form
      // }
    });
    modal.present();
    // const { data } = await modal.onDidDismiss();
    // if(data) {
    //   this.getAttendList();
    // }
  }

/**
   * 탭 스크립트
   */
tab(){
  const tabBtn = document.querySelectorAll('.tab_btn');
  const tabCont = document.querySelectorAll('.tab_edit');
  const tabFoot = document.querySelectorAll('.btn_foot');

  for(let i=0; i<tabBtn.length; i++){
    tabBtn[i].addEventListener('click', ()=>{
      for(let i=0; i<tabCont.length; i++){
        tabCont[i].classList.remove('active');
        tabFoot[i].classList.remove('active');
      }
        tabCont[i].classList.add('active');
        tabFoot[i].classList.add('active');
    })
  }
}

async userInfo(item) {
  const modal = await this._modal.create({
     component:PeopleDeleteComponent,
     componentProps:{
      // item,
      // ...{menu_state:this.editable.educationMenu_state,my_state:this.editable.my_state, type: 'EDU'}
     }
  });
  modal.present();
  // const { data } = await modal.onDidDismiss();
  // if(data) {
  //   this.eduGetList();
  // }
}

  async unit() {
    const modal = await this._modal.create({
      component: TbmUnitPage,
      componentProps: {}
    });
    modal.present();
  }

  async worker() {
    const modal = await this._modal.create({
      component: PeopleDeleteComponent,
      componentProps: {}
    });
    modal.present();
  }

  async eduAdd() {
    const modal = await this._modal.create({
      component:SearchAttendanceComponent,
      componentProps:{
        // project_id: this.user.userData.belong_data.project_id,
        // company_id: this.user.userData.belong_data.company_id,
        // educationType: false,
        // value: this.user_id,
        // title: '근로자'
      }
    });
    modal.present();
    // const { data } = await modal.onDidDismiss();
    // if(data) {
    //   this.user_id = [];
    //   data.forEach(item => {
    //     if(!this.user_id.includes(item.user_id)) this.user_id.push(item.user_id)
    //   });
    //   const res = await this.connect.run('/education/attendant/insert',{
    //     attendant_user_ids:this.user_id,
    //     education_safe_id:this.item.education_safe_id
    //   });
    //   if(res.rsCode === 0) {
    //     this.toast.present({message:'선택하신 인원이 출석되었습니다.',color:'primary'});
    //     this.eduGetList();
    //   } else {
    //     this.toast.present({message:res.rsMsg,color:'warning'});
    //   }
    //}
  }


  async registraction(){
    const modal = await this._modal.create({
      component: TbmRegistrationPage,
      componentProps: {
        // item:this.form
      }
    });
    modal.present();
  }

  async search(){
    const modal = await this._modal.create({
      component: SearchPeopleComponent,
      componentProps: {
        // item:this.form
      }
    });
    modal.present();
  }

  async qrAdd() {
    const modal = await this._modal.create({
      component:QrEducationInPage,
      componentProps: {
        // item:this.form
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      // this.eduGetList();
    }
  }

  // async eduGetList() {
  //   this.res = await this.connect.run('/education/attendant/list',{
  //     education_safe_id:this.item.education_safe_id,
  //     search_text:this.attentForm.search_text
  //   });
  //   if(this.res.rsCode === 0) {
  //     this.user_id = [];
  //     this.res?.rsMap.map((data) => {
  //       this.user_id.push(data.user_id);
  //     });
  //     this.eduUpdate = true;
  //     console.log("this.eduUpdate - ",this.eduUpdate);
  //   }
  // }

    /**
   * 미결함으로 이동
   */
    //  async pending() {
    //   const modal = await this._modal.create({
    //     component: PtwPendingListPage,
    //   });
    //   modal.present();
    // }

    /**
     * 위험공증선택시 팝업온오프
     */
    // dismiss() {
    //   this.alert.present({
    //     message: '위험공증명 작업시 스마트안전장비명 사용을 권장합니다.',
    //     buttons: [
    //       { text: '확인', handler: () => {
    //         this._modal.dismiss();
    //       }}
    //     ]
    //   })
    // }
}
