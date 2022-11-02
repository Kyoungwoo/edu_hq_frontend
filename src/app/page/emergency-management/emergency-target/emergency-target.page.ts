import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { SearchAttendanceComponent } from 'src/app/component/modal/search-attendance/search-attendance.component';
// import { QrEducationInPage } from '../../../safety-education/educatiion-status/qr-education-in/qr-education-in.page';
// import { AlertService } from 'src/app/basic/service/ionic/alert.service';

@Component({
  selector: 'app-emergency-target',
  templateUrl: './emergency-target.page.html',
  styleUrls: ['./emergency-target.page.scss'],
})
export class EmergencyTargetPage implements OnInit {
  editable ={
    add:true,
    company_id:true,
    my_state: true
  }
  
  constructor(
    private _modal: ModalController,
    // private alert: AlertService,
  ) {
  }

  ngOnInit() {

  }

  // async eduAdd() {
  //   const modal = await this._modal.create({
  //     component:SearchAttendanceComponent,
  //     componentProps:{
  //       // project_id: this.user.userData.belong_data.project_id,
  //       // company_id: this.user.userData.belong_data.company_id,
  //       // educationType: false,
  //       // value: this.user_id,
  //       // title: '근로자'
  //     }
  //   });
  //   modal.present();
  //   // const { data } = await modal.onDidDismiss();
  //   // if(data) {
  //   //   this.user_id = [];
  //   //   data.forEach(item => {
  //   //     if(!this.user_id.includes(item.user_id)) this.user_id.push(item.user_id)
  //   //   });
  //   //   const res = await this.connect.run('/education/attendant/insert',{
  //   //     attendant_user_ids:this.user_id,
  //   //     education_safe_id:this.item.education_safe_id
  //   //   });
  //   //   if(res.rsCode === 0) {
  //   //     this.toast.present({message:'선택하신 인원이 출석되었습니다.',color:'primary'});
  //   //     this.eduGetList();
  //   //   } else {
  //   //     this.toast.present({message:res.rsMsg,color:'warning'});
  //   //   }
  //   //}
  // }

  // async qrAdd() {
  //   const modal = await this._modal.create({
  //     component:QrEducationInPage,
  //     componentProps: {
  //       // item:this.form
  //     }
  //   });
  //   modal.present();
  //   const { data } = await modal.onDidDismiss();
  //   if(data) {
  //     // this.eduGetList();
  //   }
  // }

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
