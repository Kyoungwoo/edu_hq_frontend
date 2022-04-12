import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

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
    checked: boolean;
  }>

  resLevel2: ConnectResult<{
    hq_business_name: string,
    hq_business_entire_state: number,
    hq_business_use_state: number,
    hq_regional_id: number,
    hq_business_code: string,
    hq_business_id: number,
    checked: boolean;
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
  area1SelectList;
  area2SelectList;
  area3SelectList;

  area1SelectCheck: boolean = false;
  area2SelectCheck: boolean;
  area3SelectCheck: boolean;

  hq_regional_id = 0
  hq_business_id = 0

  lhHeadCheck: boolean = true;
  //lh 조직관리 끝

  //정보 접근 비밀번호

  rolepass: boolean = true;
  form = {
    company_id: this.user.userData.belong_data.company_id,
    company_password: ''
  }
  subpassword: ''
  passwordMeassge: string = '';
  passchkck: boolean = true;
  subpasscheck: boolean = true;
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
  
  jobForm = {
    company_id: this.user.userData.belong_data.company_id,
    project_id: this.user.userData.belong_data.project_id
  } 
  addPosition = [];
  selectList = [];

  //직위 관리 끝

  //안전직무
  safeJobForm = {
    company_id: this.user.userData.belong_data.company_id,
    user_type: 'COMPANY'
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

  occupationForm =  this.user.userData.belong_data.company_id;

  resOccupation: ConnectResult<{
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


  memberRoleCheck: boolean = true;
  editable:boolean = false;

  constructor(
    private connect: ConnectService,
    private modal: ModalController,
    private toast: ToastService,
    private alert: AlertService,
    public user: UserService
  ) { }

  ngOnInit() {
    this.authority();

    //lh조직기구

    this.level1();
    this.getJobPosition();
    this.getSafeJob();
    this.getOccupation();
  }

  async menuCount1() {
    this.menuCount = 1;
    if (!this.lhHeadCheck) {
      this.level1();
    }
  }

  authority() {
    if (this.user.userData.user_role === 'PARTNER_HEAD' ||
    this.user.userData.user_role === 'MASTER_HEAD' ||
    this.user.userData.user_role === 'LH_ADMIN' ||
    this.user.userData.user_role === 'LH_HEAD') this.memberRoleCheck = false;
    
    if(this.user.userData.user_role === 'PARTNER_HEAD' ||
    this.user.userData.user_role === 'MASTER_HEAD') {
      this.editable = true;
    }
    if (this.user.userData.user_role === 'LH_HEAD') {
      this.lhHeadCheck = false;
    } else if(this.lhHeadCheck) {
      this.menuCount = 2;
      this.menuCount2();
    }
  }

  async menuCount2() {
    if(this.user.userData.user_role === 'MASTER_HEAD') {
      this.form.company_id = this.user.userData.belong_data.company_id;
    }
    this.menuCount = 2;
  }

  async menuCount5() {
    this.menuCount = 5;
    if (!this.lhHeadCheck || !this.memberRoleCheck) {
      this.rolepass = false;
    }
  }

  async menuCount6() {
    this.menuCount = 6;
    if (!this.lhHeadCheck || !this.memberRoleCheck) {
      this.rolepass = false;
    }
  }

  async menuCount7() {
    this.menuCount = 7;
    if (!this.lhHeadCheck || !this.memberRoleCheck) {
      this.rolepass = false;
    }

  }
  //-->  lh조직관리 시작

  //본부, 지역본부
  async level1() {
    if (!this.lhHeadCheck) {
      this.resLevel1 = await this.connect.run('/project/organization/regional/get', {}, {});
      if (this.resLevel1.rsCode === 0) { }
    }
  }

  // //지역본부, 사업본부
  async level2() {
    this.resLevel2 = await this.connect.run('/project/organization/business/get', {
      hq_regional_id: this.hq_regional_id
    }, {});
    if (this.resLevel2.rsCode === 0) { }
  }
  //
  async level3() {
    this.resLevel3 = await this.connect.run('/project/organization/department/get', {
      hq_business_id: this.hq_business_id,
      hq_regional_id: this.hq_regional_id
    }, {});
    if (this.resLevel3.rsCode === 0) { }
  }

  async level2In(item) {
    this.hq_regional_id = item.hq_regional_id;
    this.area1SelectList = item;
    if (item.hq_regional_id) {
      this.resLevel2 = await this.connect.run('/project/organization/business/get', {
        hq_regional_id: item.hq_regional_id
      }, {});
      if (this.resLevel2.rsCode === 0) {
        this.resLevel3 = null;
      }
    }
  }

  async level3In(item) {
    this.hq_business_id = item.hq_business_id;
    this.area2SelectList = item;
    this.resLevel3 = await this.connect.run('/project/organization/department/get', {
      hq_regional_id: item.hq_regional_id,
      hq_business_id: item.hq_business_id
    }, {});
    if (this.resLevel3.rsCode === 0) { }
  }


  radioChange(level) {
    console.log("asdfasdfa");
    switch (level) {
      case 'level1':
          this.resLevel1.rsMap.forEach(item => {
            item.checked = false;
          })
        break;
      case 'level2':
        this.resLevel2.rsMap.forEach(item => {
          item.checked = false;
        })
        break;
      case 'level3':
        this.resLevel3.rsMap.forEach(item => {
          item.checked = false;
        })
        break;
    }
  }

  async levelAdd(level) {
    if (this.user.userData.user_role !== 'LH_HEAD') return await this.toast.present({ message: '권한이 없습니다.', color: 'warning' });
    switch (level) {
      case 'level1':
        this.resLevel1.rsMap.unshift({
          hq_regional_entire_state: 0, // 본사권한 = 1
          hq_regional_id: 0, // id
          hq_regional_code: '', // 코드
          hq_regional_name: '', // 지역본부명
          hq_regional_use_state: 0, // 사용 = 1
          checked: false
        });
        break;
      case 'level2':
        if (!this.area1SelectList || !this.area1SelectList.hq_regional_id) {
          return await this.toast.present({ message: 'level1 항목을 선택해주세요.', color: 'warning' });
        } else {
          if (this.resLevel2?.rsMap?.length) {
            this.resLevel2.rsMap.unshift({
              hq_business_name: '',
              hq_business_entire_state: 0,
              hq_business_use_state: 0,
              hq_regional_id: 0,
              hq_business_code: '',
              hq_business_id: 0,
              checked: false
            });
          } else {
            this.resLevel2.rsMap = [];
            this.resLevel2.rsMap.push({
              hq_business_name: '',
              hq_business_entire_state: 0,
              hq_business_use_state: 0,
              hq_regional_id: 0,
              hq_business_code: '',
              hq_business_id: 0,
              checked: false
            });
          }
        }
        break;
      case 'level3':
        if (!this.area2SelectList || !this.area2SelectList.hq_business_id) {
          return await this.toast.present({ message: 'level2 항목을 선택해주세요.', color: 'warning' });
        } else {
          if (this.resLevel3?.rsMap?.length) {
            this.resLevel3.rsMap.unshift({
              hq_department_use_state: 0, // 사용 = 1
              hq_department_id: 0, // 부서 ID
              hq_department_name: '', // 부서명
              hq_regional_id: 0, // 지역본부 ID
              hq_department_code: '', // 코드
              hq_business_id: 0, // 사업본부 ID
              checked: false
            });
          } else {
            this.resLevel3.rsMap = [];
            this.resLevel3.rsMap.push({
              hq_department_use_state: 0, // 사용 = 1
              hq_department_id: 0, // 부서 ID
              hq_department_name: '', // 부서명
              hq_regional_id: 0, // 지역본부 ID
              hq_department_code: '', // 코드
              hq_business_id: 0, // 사업본부 ID
              checked: false
            });
          }
        }
        break;
    }
  }
  async levelUpdate(level) {
    if (this.user.userData.user_role !== 'LH_HEAD') return await this.toast.present({ message: '권한이 없습니다.', color: 'warning' });
    switch (level) {
      case 'level1':
        this.resLevel1?.rsMap.forEach((item, i) => {
          if (this.area1SelectList.hq_regional_id === item.hq_regional_id) {
            item.checked = true;
          } else {
            item.checked = false;
          }
        });
        break;
      case 'level2':
        this.resLevel2?.rsMap.forEach((item, i) => {
          if (this.area2SelectList.hq_business_id === item.hq_business_id) {
            item.checked = true;
          } else {
            item.checked = false;
          }
        });
        break;
      case 'level3':
        this.resLevel3?.rsMap.forEach((item, i) => {
          if (this.area3SelectList.hq_department_id === item.hq_department_id) {
            item.checked = true;
          } else {
            item.checked = false;
          }
        });
        break;
    }

  }

  async organizationSave(level) {
    // this.hq_regional_id = this.area1SelectList.hq_regional_id;
    // this.hq_business_id = this.area2SelectList.hq_business_id;
    if (this.user.userData.user_role !== 'LH_HEAD') return await this.toast.present({ message: '권한이 없습니다.', color: 'warning' });
    switch (level) {
      case 'level1':
        this.resLevel1?.rsMap.forEach(async (item, i) => {
          if (item.hq_regional_id && item.checked) {
            const res = await this.connect.run('/project/organization/regional/update', item);
            if (res.rsCode === 0) {
              const toast = await this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
              this.level1();
            }
          } else if (!item.hq_regional_id && !item.checked) {
            const res = await this.connect.run('/project/organization/regional/insert', item);
            if (res.rsCode === 0) {
              const toast = await this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
              this.level1();
            }
          }
        });
        this.level1();
        break;
      case 'level2':
        this.resLevel2?.rsMap.forEach(async (item, i) => {
          if (item.hq_business_id && item.checked) {
            item.hq_regional_id = this.hq_regional_id;
            const res = await this.connect.run('/project/organization/business/update', item);
            if (res.rsCode === 0) {
              const toast = await this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
              this.level2();
            }
          } else if (!item.hq_business_id && !item.checked) {
            item.hq_regional_id = this.hq_regional_id;
            const res = await this.connect.run('/project/organization/business/insert', item);
            if (res.rsCode === 0) {
              const toast = await this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
              this.level2();
            }
          }
        });
        break;
      case 'level3':
        this.resLevel3?.rsMap.forEach(async (item, i) => {
          if (item.hq_department_id && item.checked) {
            item.hq_business_id = this.hq_business_id;
            item.hq_regional_id = this.hq_regional_id;
            const res = await this.connect.run('/project/organization/department/update', item);
            if (res.rsCode === 0) {
              const toast = await this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
              this.level3();
            }
          } else if (!item.hq_department_id && !item.checked) {
            item.hq_business_id = this.hq_business_id;
            item.hq_regional_id = this.hq_regional_id;
            const res = await this.connect.run('/project/organization/department/insert', item);
            if (res.rsCode === 0) {
              const toast = await this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
              this.level3();
            }
          }
        });
        break;
    }
  }


  //-->  lh조직관리 끝

  //-->  회원관리 비밀번호 시작
  passwordCheck() {
    const rex =  /^[0-9]{4,}$/;
    const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
    if (!rex.test(this.form.company_password) && this.form.company_password?.length) {
      this.passchkck = false;
      this.passwordMeassge = '비밀번호 양식이 맞지 않습니다.';
    } else {
      this.passchkck = true;
    }
  }

  subPasswordCheck() {
    if (this.form.company_password !== this.subpassword && this.form.company_password.length) {
      this.subpasscheck = false;
      this.subpasswordMeassge = '비밀번호가 일치 하지 않습니다.';
    } else {
      this.subpasscheck = true;
    }
  }
  async memberPasswordUdpate() {
    if(!this.rolepass) return this.toast.present({ message: '권한이 없습니다.' , color:'warning'});
    if(!this.passchkck) return this.toast.present({ message: '비밀번호 양식이 맞지 않습니다.' , color:'warning'});
    if(this.form.company_password !== this.subpassword) return this.toast.present({ message: '비밀번호를 확인해 주세요.', color: "warning" });
    const res = await this.connect.run('/project/company/pass/update', this.form, {});
    if (res.rsCode === 0) {
      this.toast.present({ message: '비밀번호가 변경 되었습니다.',color:'primary' });
      this.form.company_password = null;
      this.subpassword = null;
    }
  }
  //-->  회원관리 비밀번호 끝

  //--> 직위 관리 시작

  async getJobPosition() {
    this.resJobPosition = await this.connect.run('/project/job_position/get', { company_id: this.jobForm.company_id });
    if (this.resJobPosition.rsCode === 0) {
    } else {
      this.toast.present({message:this.resJobPosition.rsMsg});
    }
  } 

  async addJobPosstion() {
    if (!this.jobForm.company_id) return await this.toast.present({ message: '업체를 선택해 주세요.', color: 'warning' });
    if (this.resJobPosition?.rsMap?.length) {
      this.resJobPosition?.rsMap?.unshift({
        ctgo_job_position_name_kr: '',
        ctgo_job_position_use_state: 0,
        ctgo_job_position_name_en: '',
        company_id: this.jobForm.company_id,
        ctgo_job_position_name_vi: '',
        ctgo_job_position_id: 0,
        ctgo_job_position_name_ch: ''
      });
    } else {
      this.resJobPosition.rsMap = [];
      this.resJobPosition?.rsMap?.push({
        ctgo_job_position_name_kr: '',
        ctgo_job_position_use_state: 0,
        ctgo_job_position_name_en: '',
        company_id: this.jobForm.company_id,
        ctgo_job_position_name_vi: '',
        ctgo_job_position_id: 0,
        ctgo_job_position_name_ch: ''
      });
    }
  }

  async jobAddSave() {
    this.resJobPosition.rsMap.forEach(async(item,i) => {
      if (item.ctgo_job_position_id === 0) {
        const res = await this.connect.run('/project/job_position/insert', item, {});
        if (res.rsCode === 0) {
          if(this.resJobPosition.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
         };
      } 
      else {
        const res = await this.connect.run('/project/job_position/update', item, {});
        if (res.rsCode === 0) { 
          console.log("this.resJobPosition.rsMap.length",this.resJobPosition.rsMap.length);
          console.log("i",i +1);
          if(this.resJobPosition.rsMap.length === (i + 1)) {
            console.log("sdfasdfasdf???");
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
        };
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
    if (!this.selectList.length) return await this.toast.present({ message: '최소 1개 이상 선택해주세요.', color:'warning'});
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const list = this.resJobPosition.rsMap;
            this.selectList.forEach(async (checkedItem) => {
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
    if (this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD') {
      this.safeJobForm.company_id = this.user.userData.belong_data.company_id;
      this.safeJobForm.user_type = 'COMPANY';
    }
    this.resSafeJob = await this.connect.run('/project/safe_job/get', this.safeJobForm);
    if (this.resSafeJob.rsCode === 0) { };
  }

  async addSafeJob() {
    this.safeJobForm.company_id = this.user.userData.belong_data.company_id;
    if (!this.safeJobForm.company_id) return this.toast.present({ message: '업체를 선택해 주세요.', color: 'warning' });
    if (!this.safeJobForm.user_type) return this.toast.present({ message: '구분를 선택해 주세요.', color: 'warning' });
    
    if (this.resSafeJob?.rsMap?.length) {
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
    this.resSafeJob.rsMap.forEach(async (item, i) => {
      if (item.ctgo_safe_job_id === 0) {
        const res = await this.connect.run('/project/safe_job/insert', item, {});
        if (res.rsCode === 0) {
          if(this.resSafeJob.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
        };
      } else {
        const res = await this.connect.run('/project/safe_job/update', item, {});
        if (res.rsCode === 0) {
          if(this.resSafeJob.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
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
    if (!this.safeJobSelected.length) return await this.toast.present({ message: '최소 1개 이상 선택해주세요.',color:'warning' });
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
    if (this.user.userData.user_role === 'MASTER_HEAD' || this.user.userData.user_role === 'PARTNER_HEAD' ) {
      this.occupationForm = this.user.userData.belong_data.company_id;
    }
    this.resOccupation = await this.connect.run('/project/occupation/get', { company_id: this.occupationForm });
    if (this.resOccupation.rsCode === 0) { };
  }


  async addOccupation() {
    if (!this.occupationForm) return await this.toast.present({ message: '업체를 선택해 주세요.', color: 'warning' });
    if (this.resOccupation?.rsMap?.length) {
      this.resOccupation?.rsMap.unshift({
        ctgo_occupation_use_state: 0,
        ctgo_occupation_id: 0,
        company_id: this.occupationForm,
        ctgo_occupation_role: 'BASIC',
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
    this.resOccupation.rsMap.forEach(async (item, i) => {
      if (item.ctgo_occupation_id === 0) {
        const res = await this.connect.run('/project/occupation/insert', item, {});
        if (res.rsCode === 0) {
          if(this.resOccupation.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
        };
      } else {
        const res = await this.connect.run('/project/occupation/update', item, {});
        if (res.rsCode === 0) {
          if(this.resOccupation.rsMap.length === (i + 1)) {
            this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
          }
        };
      }
    });
  }

  async deleteOccupation() {
    if (!this.occupationSelected.length) return await this.toast.present({ message: '최소 1개 이상 선택해주세요.', color:'warning' });
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
