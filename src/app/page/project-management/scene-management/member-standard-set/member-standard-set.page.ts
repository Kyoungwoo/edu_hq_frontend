import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { OrganizationEditComponent } from './component/organization-edit/organization-edit.component';

@Component({
  selector: 'app-member-standard-set',
  templateUrl: './member-standard-set.page.html',
  styleUrls: ['./member-standard-set.page.scss'],
})
export class MemberStandardSetPage implements OnInit {

  menuCount:Number = 1;

  //lh 조직관리 시작
  resLevel1:ConnectResult <{
    hq_regional_entire_state: number, // 본사권한 = 1
    hq_regional_id: number, // id
    hq_regional_code: string, // 코드
    hq_regional_name: string, // 지역본부명
    hq_regional_use_state: number, // 사용 = 1
    checked:boolean
  }>

  resLevel2:ConnectResult <{
    hq_business_name: string,
    hq_business_entire_state: number,
    hq_business_use_state: number,
    hq_regional_id: number,
    hq_business_code: string,
    hq_business_id: number,
    checked:boolean

  }>

  resLevel3:ConnectResult <{
    hq_department_use_state: number, // 사용 = 1
    hq_department_id: number, // 부서 ID
    hq_department_name: string, // 부서명
    hq_regional_id: number, // 지역본부 ID
    hq_department_code: string, // 코드
    hq_business_id: number, // 사업본부 ID
    checked:boolean
  }>

  //lh 조직관리 끝

  //정보 접근 비밀번호
  form = {
    company_id:0,
    company_password:''
  }
  subpassword:''
  selectList = [];
  constructor(
    private connect: ConnectService,
    private modal: ModalController,
    private toast: ToastService
  ) { }

  ngOnInit() {
    //lh조직기구
    this.level1();


  }

  //-->  lh조직관리 시작

  //본부, 지역본부
  async level1() {
    this.resLevel1 = await this.connect.run('/project/organization/regional/get',{},{});
    if(this.resLevel1.rsCode === 0) {}
  }
  // //지역본부, 사업본부
  // async level2() {
  //   this.resLevel2 = await this.connect.run('/project/organization/regional/get',{},{});
  //   if(this.resLevel2.rsCode === 0) {}
  // }
  // //
  // async level3() {
  //   this.resLevel3 = await this.connect.run('/project/organization/department/get',{},{});
  //   if(this.resLevel3.rsCode === 0) {}
  // }

  async level2In(item){
    console.log(item.hq_regional_id)
      this.resLevel2 = await this.connect.run('/project/organization/business/get',{
        hq_regional_id:item.hq_regional_id
      },{});
      if(this.resLevel2.rsCode === 0) {
        console.log("this.resLevel2",this.resLevel2);
      }
  }

  async level3In(item) {
    console.log("this.hq_regional_id",item.hq_regional_id);
    console.log("hq_business_id",item.hq_business_id);

    this.resLevel3 = await this.connect.run('/project/organization/department/get',{
      hq_regional_id:item.hq_regional_id,
      hq_business_id:item.hq_business_id
    },{});
    if(this.resLevel3.rsCode === 0) {
      console.log("this.resLevel3",this.resLevel3);

    }
  }

  async levelEdit(level) {
    console.log("this.selectId",this.selectList);
    const modal = await this.modal.create({
      component:OrganizationEditComponent,
      componentProps:{
        selectList:this.selectList
      },
      cssClass:'lhOrganization'
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if(data) {
      this.level1();
    }
  }

  checkState(ev,item,level) {
    ev.stopPropagation();
    console.log(item.checked);
  }

  //-->  lh조직관리 끝

  passwordCheck() {
    let rex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/
    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    console.log(regExp.test(this.form.company_password || this.subpassword));
    if(regExp.test(this.form.company_password || this.subpassword)){
      this.form.company_password = '';
      this.subpassword = '';
      return this.toast.present({message:'한글입력은 불가능합니다.'});
    }
    if(rex.test(this.form.company_password)){
    } else {
      this.toast.present({message:'비밀번호 양식에 맞춰주세요.'});
    }
  }
  subPasswordCheck() {
    if(this.form.company_password !== this.subpassword) return this.toast.present({message:'비밀번호가 일치하지 않습니다.'});
    
  }
  //회원관리 비밀번호 시작
  async memberPasswordUdpate() {
    const res = await this.connect.run('/project/company/pass/update',this.form,{});
    if(res.rsCode === 0) {
      const toast = await this.toast.present({message:'비밀번호가 변경 되었습니다.'});
    }
  }
  
  async submit(){
    switch(this.menuCount){
      case 1:
        console.log("this.menuCount === 1");
        break;
      case 2:
        console.log("this.menuCount === 2");
        break;
      case 3:
        console.log("this.menuCount === 3");
        break;
      case 4:
        console.log("this.menuCount === 4");
        break;
      case 5:
        console.log("this.menuCount === 5");
        break;
      case 6:
        console.log("this.menuCount === 6");
        break;
      case 7:
        console.log("this.menuCount === 7");
        break;
    }
  }


}
