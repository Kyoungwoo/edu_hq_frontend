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

  jobForm: number = this.user.userData.belong_data.company_id;
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

  occupationForm = 0;

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
  constructor(
    private connect: ConnectService,
    private modal: ModalController,
    private toast: ToastService,
    private alert: AlertService,
    public user: UserService
  ) { }

  ngOnInit() {

    if (this.user.userData.user_role === 'COMPANY_HEAD' || this.user.userData.user_role === 'LH_ADMIN') {
      this.memberRoleCheck = false;
    }
    if (this.user.userData.user_role === 'LH_HEAD') {
      this.lhHeadCheck = false;
    }
    //lh조직기구

    this.level1();


    console.log(this.user.userData.belong_data.company_id);
    console.log(this.form.company_id);
    this.form.company_id = this.user.userData.belong_data.company_id;

  }

  async menuCount1() {
    this.menuCount = 1;
    if (!this.lhHeadCheck) {
      this.level1();
    } else {
      const alert = await this.alert.present({
        message: '권한이 없습니다.',
        buttons: [{ text: '확인' }]
      });
      alert.present();
    }
  }
  async menuCount2() {
    this.menuCount = 2;
    if (!this.lhHeadCheck || !this.memberRoleCheck) {
      this.rolepass = false;
    } else {
      const alert = await this.alert.present({
        message: '권한이 없습니다.',
        buttons: [{ text: '확인' }]
      });
      alert.present();
    }
  }
  async menuCount5() {
    this.menuCount = 5;
    console.log()
    if (!this.lhHeadCheck || !this.memberRoleCheck) {
      this.getJobPosition();
      this.rolepass = false;
      if (this.user.userData.user_role === 'LH_HEAD') this.jobForm = this.user.userData.belong_data.company_id;
      if (this.user.userData.user_role === 'COMPANY_HEAD') {
        this.jobForm = this.user.userData.belong_data.company_id;
      }
    } else {
      const alert = await this.alert.present({
        message: '권한이 없습니다.',
        buttons: [{ text: '확인' }]
      });
      alert.present();
    }
  }

  async menuCount6() {
    this.menuCount = 6;
    if (!this.lhHeadCheck || !this.memberRoleCheck) {
      this.getSafeJob();
      this.rolepass = false;
    } else {
      const alert = await this.alert.present({
        message: '권한이 없습니다.',
        buttons: [{ text: '확인' }]
      });
      alert.present();
    }
    console.log("안전", this.user.userData);
  }

  async menuCount7() {
    this.menuCount = 7;
    if (!this.lhHeadCheck || !this.memberRoleCheck) {
      this.rolepass = false;
      this.getOccupation();
    } else {
      console.log("ddddddddd")
      const alert = await this.alert.present({
        message: '권한이 없습니다.',
        buttons: [{ text: '확인' }]
      });
      alert.present();
    }

  }
  //-->  lh조직관리 시작

  //본부, 지역본부
  async level1() {
    if (!this.lhHeadCheck) {
      this.resLevel1 = await this.connect.run('/project/organization/regional/get', {}, {});
      if (this.resLevel1.rsCode === 0) { }
    } else {
      const alert = await this.alert.present({
        message: '권한이 없습니다.',
        buttons: [{ text: '확인' }]
      });
      alert.present();
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

  async level2In(item, ev) {
    ev.stopPropagation();
    // this.area2SelectList = [];
    // this.area3SelectList = [];

    this.hq_regional_id = item.hq_regional_id;
    console.log(item.hq_regional_id)
    if (item.hq_regional_id) {
      this.resLevel2 = await this.connect.run('/project/organization/business/get', {
        hq_regional_id: item.hq_regional_id
      }, {});
      if (this.resLevel2.rsCode === 0) {
        console.log("this.resLevel2", this.resLevel2);
      }
    }
  }

  async level3In(item, ev) {
    ev.stopPropagation();
    this.hq_business_id = item.hq_business_id;
    this.resLevel3 = await this.connect.run('/project/organization/department/get', {
      hq_regional_id: item.hq_regional_id,
      hq_business_id: item.hq_business_id
    }, {});
    if (this.resLevel3.rsCode === 0) { }
  }


  radioChange(ev, level) {
    ev.stopPropagation();
    switch (level) {
      case 'level1':
        this.resLevel1?.rsMap.forEach((item, i) => {
          if (this.area1SelectList !== item) {
            console.log("asdfasdfasdfasf");
            // this.resLevel3.rsMap = [];
            item.checked = false;
          } else {
            console.log('여기로 들어오냐?');
          }
        });
        break;
      case 'level2':
        this.resLevel2?.rsMap.forEach((item, i) => {
          if (this.area2SelectList !== item) {
            this.area3SelectList = [];
            item.checked = false;
          }
        });
        break;
      case 'level3':
        this.resLevel3?.rsMap.forEach((item, i) => {
          if (this.area2SelectList !== item) {
            item.checked = false;
          }
        });
        break;
    }
  }

  async levelAdd(level) {
    if (this.user.userData.user_role !== 'LH_HEAD') return await this.toast.present({ message: '권한이 없습니다.', color: 'danger' });
    switch (level) {
      case 'level1':
        console.log(this.resLevel1.rsMap);
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
          return await this.toast.present({ message: 'level1 항목을 선택해주세요.', color: 'danger' });
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
          return await this.toast.present({ message: 'level2 항목을 선택해주세요.', color: 'danger' });
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
    if (this.user.userData.user_role !== 'LH_HEAD') return await this.toast.present({ message: '권한이 없습니다.', color: 'danger' });
    switch (level) {
      case 'level1':
        this.resLevel1?.rsMap.forEach((item, i) => {
          if (this.area1SelectList.hq_regional_id === item.hq_regional_id) {
            item.checked = true;
            console.log(this.area1SelectCheck);
          } else {
            item.checked = false;
          }
        });
        break;
      case 'level2':
        this.resLevel2?.rsMap.forEach((item, i) => {
          console.log(item)
          if (this.area1SelectList.hq_regional_id === item.hq_regional_id) {
            item.checked = true;
            console.log(this.area1SelectCheck);
          } else {
            item.checked = false;
          }
        });
        break;
      case 'level3':
        this.resLevel3?.rsMap.forEach((item, i) => {
          console.log(item)
          if (this.area1SelectList.hq_regional_id === item.hq_regional_id) {
            item.checked = true;
            console.log(this.area3SelectCheck);
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
    if (this.user.userData.user_role !== 'LH_HEAD') return await this.toast.present({ message: '권한이 없습니다.', color: 'danger' });
    switch (level) {
      case 'level1':
        this.resLevel1?.rsMap.forEach(async (item, i) => {
          if (item.hq_regional_id && item.checked) {
            console.log("true");
            const res = await this.connect.run('/project/organization/regional/update', item);
            if (res.rsCode === 0) {
              const toast = await this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
              this.level1();
            }
          } else if (!item.hq_regional_id && !item.checked) {
            console.log('false');
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
            console.log("item.hq_regional_id", item.hq_regional_id);
            console.log("this.hq_regional_id", this.hq_regional_id);
            item.hq_regional_id = this.hq_regional_id;
            const res = await this.connect.run('/project/organization/business/update', item);
            if (res.rsCode === 0) {
              const toast = await this.toast.present({ message: '수정 되었습니다.', color: 'primary' });
              this.level2();
            }
          } else if (!item.hq_business_id && !item.checked) {
            item.hq_regional_id = this.hq_regional_id;
            console.log('false');
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
            console.log('false');
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
    if (this.rolepass) return await this.toast.present({ message: '권한이 없습니다.' });
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
    if (this.resJobPosition?.rsMap?.length) {
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
      console.log("this.resJobPosition", this.resJobPosition.rsMap);
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
    if (this.user.userData.user_role === 'COMPANY_HEAD') {
      this.safeJobForm.company_id = this.user.userData.belong_data.company_id;
      this.safeJobForm.user_type = 'COMPANY';
    }
    this.resSafeJob = await this.connect.run('/project/safe_job/get', this.safeJobForm);
    if (this.resSafeJob.rsCode === 0) { };
  }

  async addSafeJob() {
    this.safeJobForm.company_id = this.user.userData.belong_data.company_id;
    console.log(this.user.userData.belong_data.company_id);
    console.log(this.safeJobForm.company_id);
    if (!this.safeJobForm.company_id) return await this.toast.present({ message: '업체를 선택해 주세요.', color: 'danger' });
    if (!this.safeJobForm.user_type) return await this.toast.present({ message: '구분를 선택해 주세요.', color: 'danger' });

    if (this.resJobPosition?.rsMap?.length) {
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
      console.log("this.resSafeJob.rsMap", this.resSafeJob?.rsMap);
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
    if (this.user.userData.user_role === 'COMPANY_HEAD') {
      this.occupationForm = this.user.userData.belong_data.company_id;
    }
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
