import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { OrganizationEditComponent } from './component/organization-edit/organization-edit.component';

@Component({
  selector: 'app-member-standard-set',
  templateUrl: './member-standard-set.page.html',
  styleUrls: ['./member-standard-set.page.scss'],
})
export class MemberStandardSetPage implements OnInit {

  menuCount:Number = 1;

  resLevel1:ConnectResult <{
    hq_regional_entire_state: number, // 본사권한 = 1
    hq_regional_id: number, // id
    hq_regional_code: string, // 코드
    hq_regional_name: string, // 지역본부명
    hq_regional_use_state: number // 사용 = 1
  }>

  resLevel2:ConnectResult <{
    hq_business_name: string,
    hq_business_entire_state: number,
    hq_business_use_state: number,
    hq_regional_id: number,
    hq_business_code: string,
    hq_business_id: number
  }>

  resLevel3:ConnectResult <{
    hq_department_use_state: number, // 사용 = 1
    hq_department_id: number, // 부서 ID
    hq_department_name: string, // 부서명
    hq_regional_id: number, // 지역본부 ID
    hq_department_code: string, // 코드
    hq_business_id: number // 사업본부 ID
  }>

  selectId = [];
  constructor(
    private connect: ConnectService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.level1();
  }

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

  async levelAdd() {
    const modal = await this.modal.create({
      component:OrganizationEditComponent,
      componentProps:{
        selectId:this.selectId
      },
      cssClass:'lhOrganization'
      
    });
    modal.present();
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
