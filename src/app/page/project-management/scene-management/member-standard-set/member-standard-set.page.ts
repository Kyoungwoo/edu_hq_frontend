import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { OrganizationEditComponent } from './component/organization-edit/organization-edit.component';

@Component({
  selector: 'app-member-standard-set',
  templateUrl: './member-standard-set.page.html',
  styleUrls: ['./member-standard-set.page.scss'],
})
export class MemberStandardSetPage implements OnInit {

  menuCount: Number = 1;

  //lh 조직관리 시작


  resLevel1: ConnectResult<{
    hq_regional_entire_state: number, // 본사권한 = 1
    hq_regional_id: number, // id
    hq_regional_code: string, // 코드
    hq_regional_name: string, // 지역본부명
    hq_regional_use_state: number, // 사용 = 1
    checked: boolean
  }>

  resLevel2: ConnectResult<{
    hq_business_name: string,
    hq_business_entire_state: number,
    hq_business_use_state: number,
    hq_regional_id: number,
    hq_business_code: string,
    hq_business_id: number,
    checked: boolean

  }>

  resLevel3: ConnectResult<{
    hq_department_use_state: number, // 사용 = 1
    hq_department_id: number, // 부서 ID
    hq_department_name: string, // 부서명
    hq_regional_id: number, // 지역본부 ID
    hq_department_code: string, // 코드
    hq_business_id: number, // 사업본부 ID
    checked: boolean
  }>
  area1SelectList = [];
  area2SelectList = [];
  area3SelectList = [];

  //lh 조직관리 끝

  //정보 접근 비밀번호
  form = {
    company_id: 0,
    company_password: ''
  }
  subpassword: ''
  passwordMeassge: string = '';
  passchkck: boolean = false;
  subpasscheck: boolean = false;
  subpasswordMeassge: string = '';



  //직위 관리
  resJobPosition: ConnectResult<{
    ctgo_job_position_name_kr: string,
    ctgo_job_position_use_state: number,
    ctgo_job_position_name_en: string,
    company_id: number,
    ctgo_job_position_name_vi: string,
    ctgo_job_position_id: number,
    ctgo_job_position_name_ch: string
  }>

  jobForm: number = 0;
  addPosition = [];
  selectList = [];

  //직위 관리 끝

  //안전직무
  safeJobForm = {
    company_id: 0,
    user_type: ''
  }

  resSafeJob: ConnectResult<{
    ctgo_safe_job_name_vi: string,
    ctgo_safe_job_name_ch: string,
    ctgo_safe_job_use_state: number,
    company_id: number,
    ctgo_safe_job_name_kr: string,
    ctgo_safe_job_name_en: string,
    ctgo_safe_job_id: number,
    ctgo_safe_job_role: string
    user_type: string
  }>

  safeJobSelected = [];
  //안전직무 끝

  //직종

  occupationForm = 0

  resOccupation: ConnectResult <{
    ctgo_occupation_use_state: number,
    ctgo_occupation_id: number,
    company_id: number,
    ctgo_occupation_role: string,
    ctgo_occupation_name_en: string,
    ctgo_occupation_name_kr: string,
    ctgo_occupation_name_ch: string,
    ctgo_occupation_name_vi: string
  }>
  occupationSelected = [];
  //직종 끝

  constructor(
    private connect: ConnectService,
    private modal: ModalController,
    private toast: ToastService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    //lh조직기구
    this.level1();
  }

  //-->  lh조직관리 시작

  //본부, 지역본부
  async level1() {
    this.resLevel1 = await this.connect.run('/project/organization/regional/get', {}, {});
    if (this.resLevel1.rsCode === 0) { }
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

  async level2In(item) {
    console.log(item.hq_regional_id)
    this.resLevel2 = await this.connect.run('/project/organization/business/get', {
      hq_regional_id: item.hq_regional_id
    }, {});
    if (this.resLevel2.rsCode === 0) {
      console.log("this.resLevel2", this.resLevel2);
    }
  }

  async level3In(item) {
    console.log("this.hq_regional_id", item.hq_regional_id);
    console.log("hq_business_id", item.hq_business_id);

    this.resLevel3 = await this.connect.run('/project/organization/department/get', {
      hq_regional_id: item.hq_regional_id,
      hq_business_id: item.hq_business_id
    }, {});
    if (this.resLevel3.rsCode === 0) {
      console.log("this.resLevel3", this.resLevel3);

    }
  }

  async levelEdit(level) {
    console.log("this.area1SelectList",this.area1SelectList);
    let selectData = [];
    switch(level) {
      case 'level1':
        selectData = this.area1SelectList;
      break;
      case 'level2':
        selectData = this.area2SelectList;
      break;
      case 'level3':
        selectData = this.area3SelectList;
      break;
    }
    console.log("selectData",selectData);
    const modal = await this.modal.create({
      component: OrganizationEditComponent,
      componentProps: {
        selectList: selectData,
        level:level
      },
      cssClass: 'lhOrganization'
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.level1();
    }
  }


  //-->  lh조직관리 끝

  //-->  회원관리 비밀번호 시작
  passwordCheck() {
    const rex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/
    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    console.log("ㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴ", rex.test(this.form.company_password || this.subpassword));
    // if(regExp.test(this.form.company_password || this.subpassword)){
    //   this.form.company_password = '';
    //   this.subpassword = '';
    //   this.passwordChedk = false;
    //   this.passwordMeassge = '한글입력은 불가능합니다.'
    // }
    // else {
    //   this.passwordChedk = true;
    // }

    if (!rex.test(this.form.company_password)) {
      this.passchkck = false;
      this.passwordMeassge = '비밀번호 양식이 맞지 않습니다.';
    } else {
      this.passchkck = true;
    }

  }
  subPasswordCheck() {
    if (this.form.company_password !== this.subpassword) {
      this.subpasscheck = false;
      this.subpasswordMeassge = '비밀번호가 일치 하지 않습니다.';
    } else {
      this.subpasscheck = true;
    }
  }
  async memberPasswordUdpate() {
    console.log("this.subpasscheck", this.subpasscheck);
    console.log("this.passchkck", this.passchkck);
    if (this.form.company_password !== this.subpassword) return this.toast.present({ message: '비밀번호를 확인해 주세요.', color: "danger" });
    const res = await this.connect.run('/project/company/pass/update', this.form, {});
    if (res.rsCode === 0) {
      const toast = await this.toast.present({ message: '비밀번호가 변경 되었습니다.' });
    }
  }
  //-->  회원관리 비밀번호 끝

  //--> 직위 관리 시작

  async getJobPosition() {
    this.resJobPosition = await this.connect.run('/project/job_position/get', { company_id: this.jobForm });
    if (this.resJobPosition.rsCode === 0) {
      
    }
  }

  async addJobPosstion() {
    if (!this.jobForm) return await this.toast.present({ message: '업체를 선택해 주세요.', color: 'danger' });
    if(this.resJobPosition?.rsMap?.length) {
      this.resJobPosition?.rsMap?.unshift({
        ctgo_job_position_name_kr: '',
        ctgo_job_position_use_state: 0,
        ctgo_job_position_name_en: '',
        company_id: this.jobForm,
        ctgo_job_position_name_vi: '',
        ctgo_job_position_id: 0,
        ctgo_job_position_name_ch: ''
      });
    } else {
      console.log("Asdfasdfasdf");
      this.resJobPosition.rsMap = [];
      console.log("this.resJobPosition",this.resJobPosition.rsMap);
      this.resJobPosition?.rsMap?.push({
        ctgo_job_position_name_kr: '',
        ctgo_job_position_use_state: 0,
        ctgo_job_position_name_en: '',
        company_id: this.jobForm,
        ctgo_job_position_name_vi: '',
        ctgo_job_position_id: 0,
        ctgo_job_position_name_ch: ''
      });
    }
  }

  async jobAddSave() {
    this.resJobPosition.rsMap.forEach(async (item) => {
      if (item.ctgo_job_position_id === 0) {
        const res = await this.connect.run('/project/job_position/insert', item, {});
        if (res.rsCode === 0) { };
      } else {
        const res = await this.connect.run('/project/job_position/update', item, {});
        if (res.rsCode === 0) { };
      }
    });
  }
  state(state) {
    if (state) {
      for (let j = 0; j < this.resJobPosition.rsMap.length; j++) {
        this.resJobPosition.rsMap[j].ctgo_job_position_use_state = 1
      }
    } else {
      for (let j = 0; j < this.resJobPosition.rsMap.length; j++) {
        this.resJobPosition.rsMap[j].ctgo_job_position_use_state = 0
      }
    }
  }
  async postionDelete() {
    console.log(this.selectList);
    if (!this.selectList.length) return await this.toast.present({ message: '최소 1개 이상 선택해주세요.' });
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const list = this.resJobPosition.rsMap;
            this.selectList.forEach(async (checkedItem) => {
              console.log("checkedItem", checkedItem);
              if (checkedItem.ctgo_job_position_id === 0) {
                list.splice(list.findIndex(item => item === checkedItem), 1);
              } else {
                const res = await this.connect.run('/project/job_position/delete', {
                  company_id: checkedItem.company_id,
                  ctgo_job_position_id: checkedItem.ctgo_job_position_id
                });
                if (res.rsCode === 0) {
                  this.getJobPosition();
                };
              }
            });
            this.selectList = [];
          }
        }
      ]
    });
  }

  async getSafeJob() {
    this.resSafeJob = await this.connect.run('/project/safe_job/get', this.safeJobForm);
    if (this.resSafeJob.rsCode === 0) { };
  }

  async addSafeJob() {
    if (!this.safeJobForm.company_id) return await this.toast.present({ message: '업체를 선택해 주세요.', color: 'danger' });
    if (!this.safeJobForm.user_type) return await this.toast.present({ message: '구분를 선택해 주세요.', color: 'danger' });
    
    if(this.resJobPosition?.rsMap?.length){
      this.resSafeJob?.rsMap?.unshift({
        ctgo_safe_job_name_vi: '',
        ctgo_safe_job_name_ch: '',
        ctgo_safe_job_use_state: 0,
        company_id: this.safeJobForm.company_id,
        ctgo_safe_job_name_kr: '',
        ctgo_safe_job_name_en: '',
        ctgo_safe_job_id: 0,
        ctgo_safe_job_role: '',
        user_type: this.safeJobForm.user_type
      });
    } else {
      
      this.resSafeJob.rsMap = [];
      console.log("this.resSafeJob.rsMap",this.resSafeJob.rsMap);
      this.resSafeJob?.rsMap?.push({
        ctgo_safe_job_name_vi: '',
        ctgo_safe_job_name_ch: '',
        ctgo_safe_job_use_state: 0,
        company_id: this.safeJobForm.company_id,
        ctgo_safe_job_name_kr: '',
        ctgo_safe_job_name_en: '',
        ctgo_safe_job_id: 0,
        ctgo_safe_job_role: '',
        user_type: this.safeJobForm.user_type
      });
    }
  }

  async safeJobSave() {
    this.resSafeJob.rsMap.forEach(async (item) => {
      if (item.ctgo_safe_job_id === 0) {
        console.log('----------------', item)
        const res = await this.connect.run('/project/safe_job/insert', item, {});
        if (res.rsCode === 0) {
          return await this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
        };
      } else {
        const res = await this.connect.run('/project/safe_job/update', item, {});
        if (res.rsCode === 0) {
          return await this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
        };
      }
    });
  }

  safeState(state) {
    if (state) {
      for (let j = 0; j < this.resSafeJob.rsMap.length; j++) {
        this.resSafeJob.rsMap[j].ctgo_safe_job_use_state = 1
      }
    } else {
      for (let j = 0; j < this.resSafeJob.rsMap.length; j++) {
        this.resSafeJob.rsMap[j].ctgo_safe_job_use_state = 0
      }
    }
  }

  async safeDelete() {
    if (!this.safeJobSelected.length) return await this.toast.present({ message: '최소 1개 이상 선택해주세요.' });
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const list = this.resSafeJob.rsMap;
            this.safeJobSelected.forEach(async (checkedItem) => {
              if (checkedItem.ctgo_safe_job_id === 0) {
                list.splice(list.findIndex(item => item === checkedItem), 1);
              } else {
                const res = await this.connect.run('/project/safe_job/delete', {
                  company_id: checkedItem.company_id,
                  ctgo_safe_job_id: checkedItem.ctgo_safe_job_id
                });
                if (res.rsCode === 0) {
                  this.getSafeJob();
                };
              }
              this.safeJobSelected = [];
            });
            this.getSafeJob();
          }
        }
      ]
    });
    alert.present();
  }

  async getOccupation() {
    this.resOccupation = await this.connect.run('/project/occupation/get', { company_id: this.occupationForm });
    if (this.resOccupation.rsCode === 0) { };
  }


  async addOccupation() {
    if (!this.occupationForm) return await this.toast.present({ message: '업체를 선택해 주세요.', color: 'danger' });
    if (this.resOccupation?.rsMap?.length) {
      this.resOccupation?.rsMap.unshift({
        ctgo_occupation_use_state: 0,
        ctgo_occupation_id: 0,
        company_id: this.occupationForm,
        ctgo_occupation_role: '',
        ctgo_occupation_name_en: '',
        ctgo_occupation_name_kr: '',
        ctgo_occupation_name_ch: '',
        ctgo_occupation_name_vi: ''
      });
    } else {
      this.resOccupation.rsMap = [];
      this.resOccupation?.rsMap.push({
        ctgo_occupation_use_state: 0,
        ctgo_occupation_id: 0,
        company_id: this.occupationForm,
        ctgo_occupation_role: 'BASIC',
        ctgo_occupation_name_en: '',
        ctgo_occupation_name_kr: '',
        ctgo_occupation_name_ch: '',
        ctgo_occupation_name_vi: ''
      });
    }
  }

  async occupationSave() {
    this.resOccupation.rsMap.forEach(async (item) => {
      if (item.ctgo_occupation_id === 0) {
        const res = await this.connect.run('/project/occupation/insert', item, {});
        if (res.rsCode === 0) {
          return await this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
        };
      } else {
        const res = await this.connect.run('/project/occupation/update', item, {});
        if (res.rsCode === 0) {
          return await this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
        };
      }
    });
  }

  async deleteOccupation() {
    if (!this.occupationSelected.length) return await this.toast.present({ message: '최소 1개 이상 선택해주세요.' });
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const list = this.resOccupation.rsMap;
            this.occupationSelected.forEach(async (checkedItem) => {
              if (checkedItem.ctgo_occupation_id === 0) {
                list.splice(list.findIndex(item => item === checkedItem), 1);
              } else {
                const res = await this.connect.run('/project/occupation/delete', {
                  company_id: checkedItem.company_id,
                  ctgo_occupation_id: checkedItem.ctgo_occupation_id
                });
                if (res.rsCode === 0) {
                  this.getOccupation();
                };
              }
              this.occupationSelected = [];
            });
          }
        }
      ]
    });
    alert.present();
  }

  occupationState(state) {
    if (state) {
      for (let j = 0; j < this.resOccupation.rsMap.length; j++) {
        this.resOccupation.rsMap[j].ctgo_occupation_use_state = 1
      }
    } else {
      for (let j = 0; j < this.resOccupation.rsMap.length; j++) {
        this.resOccupation.rsMap[j].ctgo_occupation_use_state = 0
      }
    }
  }
}
