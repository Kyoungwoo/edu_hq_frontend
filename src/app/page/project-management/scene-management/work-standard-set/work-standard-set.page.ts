import { Component, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';

@Component({
  selector: 'app-work-standard-set',
  templateUrl: './work-standard-set.page.html',
  styleUrls: ['./work-standard-set.page.scss'],
})
export class WorkStandardSetPage implements OnInit {

  segment:string = '1';

  //공종 시작
  constructionForm = {
    project_id: 0,
    master_company_id: 0
  }
  resConstruction: ConnectResult<{
    ctgo_construction_id: number, // 공종ID
    ctgo_construction_name: string, // 공종명
    project_id: number, // 현장 ID
    ctgo_construction_use_state: number// 1 사용 / 0 미사용
  }>

  constructionSelected = [];
  //공종 끝

  //건설기계
  machineryFrom = {
    project_id:this.user.userData.belong_data.company_id,
    master_company_id:this.user.userData.belong_data.company_id,
    search_text:''
  }

  resMachinery: ConnectResult<{
    ctgo_machinery_id: number,
    master_company_id: number,
    ctgo_machinery_name: string,
    ctgo_machinery_doc:boolean
    ctgo_machinery_doc_state: number,
    ctgo_machinery_use_state: number,
    project_id:number
  }>
  selectedMachinery = [];
  //건설기계 끝

  //특수 공도구
  toolForm = {
    company_id:this.user.userData.belong_data.company_id,
    project_id:this.user.userData.belong_data.project_id
  }
  resTool:ConnectResult<{
    ctgo_tool_id: number,
    company_id: number,
    project_id: number,
    ctgo_tool_name: string,
    ctgo_tool_use_state: number
  }>

  slectedTool = [];
  //특수 공도구 끝

  //회의록 현의사항
  meetingForm = {
    company_id:0,
    project_id:0
  }

  resMeeting:ConnectResult<{
    safety_default: string,
    health_default: string,
    company_id: number,
    project_id: number,
    union_default: string
  }> 
  //회의록 현의사항 끝

  //재해 형태
  disasterForm = this.user.userData.belong_data.company_id;

  resDisaster:ConnectResult<{
    ctgo_disaster_name:string,
    ctgo_disaster_use_state: number,
    company_id: number,
    default_state: number,
    ctgo_disaster_id: number
  }>

  disasterSelected = [];

  workRoleCheck:boolean = true;
  editable = false;
  //재해 형태 끝
  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private alert: AlertService,
    public user: UserService,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    if(this.user.userData.user_role === 'MASTER_HEAD' ||
     this.user.userData.user_role === 'LH_ADMIN' ||
      this.user.userData.user_role === 'LH_HEAD') {
      this.workRoleCheck = false;
      this.editable = true;
    }

    this.segmentChange();
  }

  async segmentChange() {
    switch(this.segment) {
      case '1':
        await this.getConstructionForm();
        this.getConstruction();
        break;
      case '2': // 2차 개발
        break;
      case '3': // 2차 개발
        break;
      case '4': // 2차 개발
        break;
      case '5':
        this.getMachinery();
        break;
      case '6':
        this.getTool();
        break;
      case '7': // 2차 개발
        break;
      case '8':
        this.getMeeting();
        break;
      case '9':
        this.getDisaster();
        break;
      case '10': // 2차 개발
        break;
    }
  }

  async getConstructionForm() {
    const { belong_data } = this.user.userData;
    this.constructionForm.project_id = belong_data.project_id;
    
    if(belong_data.company_contract_type === '원청사') {
      this.constructionForm.master_company_id = belong_data.company_id;
    }
    else if(belong_data.company_contract_type === '협력사') {
      // 협력사는 내 회사가 아니라, 내 원청사를 company_id에 넣어줘야 함
      const res = await this.connect.run('/category/certify/search_my_master_company/get', {
        project_id: this.constructionForm.project_id,
        search_text: ''
      });
      if(res.rsCode === 0) {
        const contractor = res.rsMap[0];
        this.constructionForm.master_company_id = contractor.master_company_id;
      }
      else {
        this.toast.present({ color: 'warning', message: res.rsMsg });
      }
    }
  }
  
  //공종 시작
  async getConstruction() {
    if (!this.constructionForm) return await this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' });
    this.resConstruction = await this.connect.run('/project/construction/get', this.constructionForm);
    if (this.resConstruction.rsCode === 0) { };
  }

  async constructionAdd() {
    if (!this.constructionForm) return await this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' });
    if (this.resConstruction?.rsMap?.length) {
      this.resConstruction?.rsMap.unshift({
        ctgo_construction_id: 0, // 공종ID
        ctgo_construction_name: '', // 공종명
        project_id: this.constructionForm.project_id, // 현장 ID
        ctgo_construction_use_state: 0// 1 사용 / 0 미사용
      });
    } else {
      this.resConstruction.rsMap = [];
      this.resConstruction?.rsMap.push({
        ctgo_construction_id: 0, // 공종ID
        ctgo_construction_name: '', // 공종명
        project_id: this.constructionForm.project_id, // 현장 ID
        ctgo_construction_use_state: 0// 1 사용 / 0 미사용
      });
    }
  }
  async constructionSave() {
    this.resConstruction.rsMap.forEach(async (item, i) => {
      if (item.ctgo_construction_id === 0) {
        const res = await this.connect.run('/project/construction/insert', item, {})
        if (res.rsCode === 0) {
          if(this.resConstruction.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
        };
      } else {
        const res = await this.connect.run('/project/construction/update', item, {});
        if (res.rsCode === 0) {
          if(this.resConstruction.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
        };
      }
    });

  }
  constructionState(state) {
    if (state) {
      for (let j = 0; j < this.resConstruction.rsMap.length; j++) {
        this.resConstruction.rsMap[j].ctgo_construction_use_state = 1
      }
    } else {
      for (let j = 0; j < this.resConstruction.rsMap.length; j++) {
        this.resConstruction.rsMap[j].ctgo_construction_use_state = 0
      }
    }
  }

  async constructionDelete() {
    if (!this.constructionSelected.length) return await this.toast.present({ message: '최소 1개 이상 선택해주세요.', color:'warning' });
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const list = this.resConstruction.rsMap;
            // this.constructionSelected.forEach(async (checkedItem) => {
            //   if (checkedItem.ctgo_occupation_id === 0) {
            //     list.splice(list.findIndex(item => item === checkedItem), 1);
            //   } else {
            //     const res = await this.connect.run('/project/occupation/delete', {
            //       company_id: checkedItem.company_id,
            //       ctgo_occupation_id: checkedItem.ctgo_occupation_id
            //     });
            //     if (res.rsCode === 0) {
            //       this.getConstruction();
            //     };
            //   }
            //   this.constructionSelected = [];
            // });
          }
        }
      ]
    });
    alert.present();
  }

  //공종 끝

  //건설기계
  async getMachinery() {
  console.log("this.machineryFrom",this.machineryFrom);
  this.resMachinery = await this.connect.run('/project/machinery/get', this.machineryFrom);
    if (this.resMachinery.rsCode === 0) { 
      this.resMachinery.rsMap.forEach(item => {
        item.ctgo_machinery_doc_state ? item.ctgo_machinery_doc = true : item.ctgo_machinery_doc = false;
      })
    };
  }

  async machineryAdd() {
    if (!this.machineryFrom) return await this.toast.present({ message: '업체을 선택해주세요.', color: 'warning' });
    if (this.resMachinery?.rsMap?.length) {
      this.resMachinery?.rsMap.unshift({
        ctgo_machinery_id: 0,
        master_company_id: this.machineryFrom.master_company_id,
        project_id: this.machineryFrom.project_id,
        ctgo_machinery_name: '',
        ctgo_machinery_doc_state: 0,
        ctgo_machinery_use_state: 0,
        ctgo_machinery_doc:false
      });
    } else {
      this.resMachinery.rsMap = [];
      this.resMachinery?.rsMap.push({
        ctgo_machinery_id: 0,
        master_company_id: this.machineryFrom.master_company_id,
        project_id: this.machineryFrom.project_id,
        ctgo_machinery_name: '',
        ctgo_machinery_doc_state: 0,
        ctgo_machinery_use_state: 0,
        ctgo_machinery_doc:false
      });
    }
  }
  async machineryDelete() {
    console.log(this.selectedMachinery);
    let filteritem = this.selectedMachinery.filter(item => this.selectedMachinery.indexOf(item))
    if(!filteritem.length) return this.toast.present({ message: '최소 1개 이상 선택해주세요.',color:'warning' });
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const list = this.resMachinery.rsMap;
            this.selectedMachinery.forEach(async (checkedItem) => {
              if (checkedItem.ctgo_machinery_id === 0) {
                list.splice(list.findIndex(item => item === checkedItem), 1);
              } else {
                const res = await this.connect.run('/project/machinery/delete', {
                  company_id: checkedItem.company_id,
                  ctgo_machinery_id: checkedItem.ctgo_machinery_id
                });
                if (res.rsCode === 0) {
                  this.getMachinery();
                };
              }
              this.selectedMachinery = [];
            });
          }
        }
      ]
    });
    alert.present();
  }
  machineryState(state) {
  if (state) {
      for (let j = 0; j < this.resMachinery.rsMap.length; j++) {
        this.resMachinery.rsMap[j].ctgo_machinery_use_state = 1
      }
    } else {
      for (let j = 0; j < this.resMachinery.rsMap.length; j++) {
        this.resMachinery.rsMap[j].ctgo_machinery_use_state = 0
      }
    }
  }

  machinerySave(){
    this.resMachinery.rsMap.forEach(item => {
      item.ctgo_machinery_doc_state ? item.ctgo_machinery_doc_state = 1 : item.ctgo_machinery_doc_state = 0;
    });
    this.resMachinery.rsMap.forEach(async (item, i) => {
      if (item.ctgo_machinery_id === 0) {
        console.log("item",item);
        const res = await this.connect.run('/project/machinery/insert', item, {})
        if (res.rsCode === 0) {
          item.ctgo_machinery_doc ? item.ctgo_machinery_doc_state = 1 : item.ctgo_machinery_doc_state = 0;
          if(this.resMachinery.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
        };
      } else {
        return;
        const res = await this.connect.run('/project/machinery/update', item, {});
        if (res.rsCode === 0) {
          item.ctgo_machinery_doc ? item.ctgo_machinery_doc_state = 1 : item.ctgo_machinery_doc_state = 0;
          if(this.resMachinery.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
        };
      }
    });
  }
  //건설기계끝

  //특수 공도구
  async getTool() {
    await this.promise.wait(() => this.toolForm);
    this.resTool = await this.connect.run('/project/tool/get',this.toolForm,{});
    if(this.resTool.rsCode === 0) {};
  }

  async toolAdd() {
    if (!this.toolForm.project_id) return await this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' });
    if (!this.toolForm.company_id) return await this.toast.present({ message: '업체를 선택해주세요.', color: 'danger' });

    if (this.resTool?.rsMap?.length) {
      this.resTool?.rsMap.unshift({
        ctgo_tool_id: 0,
        company_id: this.toolForm.company_id,
        project_id: this.toolForm.project_id,
        ctgo_tool_name: '',
        ctgo_tool_use_state: 0
      });
    } else {
      this.resTool.rsMap = [];
      this.resTool?.rsMap.push({
        ctgo_tool_id: 0,
        company_id: this.toolForm.company_id,
        project_id: this.toolForm.project_id,
        ctgo_tool_name: '',
        ctgo_tool_use_state: 0
      });
    }
  }

  async toolDelete() {
    if (!this.slectedTool.length) return await this.toast.present({ message: '최소 1개 이상 선택해주세요.',color:'warning'});
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const list = this.resTool.rsMap;
            this.slectedTool.forEach(async (checkedItem) => {
              if (checkedItem.ctgo_tool_id === 0) {
                list.splice(list.findIndex(item => item === checkedItem), 1);
              } else {
                const res = await this.connect.run('/project/tool/delete', {
                  company_id: checkedItem.company_id,
                  ctgo_tool_id: checkedItem.ctgo_tool_id,
                  project_id: checkedItem.project_id
                });
                if (res.rsCode === 0) {
                  this.getTool();
                };
              }
              this.slectedTool = [];
            });
          }
        }
      ]
    });
    alert.present();
  }

  toolSave() {
    this.resTool.rsMap.forEach(async (item, i) => {
      if (item.ctgo_tool_id === 0) {
        const res = await this.connect.run('/project/tool/insert', item, {})
        if (res.rsCode === 0) {
          if(this.resTool.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
        };
      } else {
        const res = await this.connect.run('/project/tool/update', item, {});
        if (res.rsCode === 0) {
          if(this.resTool.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
        };
      }
    });
  }
  toolState(state) {
    if (state) {
      for (let j = 0; j < this.resTool.rsMap.length; j++) {
        this.resTool.rsMap[j].ctgo_tool_use_state = 1
      }
    } else {
      for (let j = 0; j < this.resTool.rsMap.length; j++) {
        this.resTool.rsMap[j].ctgo_tool_use_state = 0
      }
    }
  }

  //특수 공도구 끝

  //회의록 협의체
  async getMeeting() {
    await this.promise.wait(() => this.meetingForm.project_id = this.user.userData.belong_data.project_id);
    await this.promise.wait(() => this.meetingForm.company_id = this.user.userData.belong_data.company_id);
    const res = await this.connect.run('/project/safety_meeting/get',this.meetingForm,{});
    if(res.rsCode === 0) {
      this.resMeeting = {
        ...res,
        ...this.resMeeting
      }
    };
  }

  async meetingUpdate() {
    const res = await this.connect.run('/project/safety_meeting/update',this.resMeeting.rsObj,{});
    if(res.rsCode === 0) {
      this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
    }
  }

  //회의록 협의체 끝

  //재해형태
  async getDisaster() {
    this.resDisaster = await this.connect.run('/project/disaster/get',{company_id:this.disasterForm},{});
    if(this.resDisaster.rsCode === 0) {};
  }
  async disasterAdd() {
    if (!this.disasterForm) return await this.toast.present({ message: '현장을 선택해주세요.', color: 'danger' });
    if (this.resDisaster?.rsMap?.length) {
      this.resDisaster?.rsMap.unshift({
        ctgo_disaster_name:'',
        ctgo_disaster_use_state: 0,
        company_id: this.disasterForm,
        default_state: 0,
        ctgo_disaster_id: 0
      });
    } else {
      this.resDisaster.rsMap = [];
      this.resDisaster?.rsMap.push({
        ctgo_disaster_name:'',
        ctgo_disaster_use_state: 0,
        company_id: this.disasterForm,
        default_state: 0,
        ctgo_disaster_id: 0
      });
    }
  }

  disasterState(state) {
    if (state) {
      for (let j = 0; j < this.resDisaster.rsMap.length; j++) {
        this.resDisaster.rsMap[j].ctgo_disaster_use_state = 1
      }
    } else {
      for (let j = 0; j < this.resDisaster.rsMap.length; j++) {
        this.resDisaster.rsMap[j].ctgo_disaster_use_state = 0
      }
    }
  }

  async disasterDelete() {
    if (!this.disasterSelected.length) return await this.toast.present({ message: '최소 1개 이상 선택해주세요.' });
    const alert = await this.alert.present({
      message: '삭제 하시겠습니까?',
      buttons: [
        { text: '아니요' },
        {
          text: '예',
          handler: async () => {
            const list = this.resDisaster.rsMap;
            this.disasterSelected.forEach(async (checkedItem) => {
              if (checkedItem.ctgo_disaster_id === 0) {
                list.splice(list.findIndex(item => item === checkedItem), 1);
              } else {
                const res = await this.connect.run('/project/disaster/delete', {
                  company_id: checkedItem.company_id,
                  ctgo_disaster_id: checkedItem.ctgo_disaster_id
                });
                if (res.rsCode === 0) {
                  this.getDisaster();
                };
              }
              this.disasterSelected = [];
            });
          }
        }
      ]
    });
    alert.present();
  }

  disasterSave() {
    this.resDisaster.rsMap.forEach(async (item, i) => {
      if (item.ctgo_disaster_id === 0) {
        const res = await this.connect.run('/project/disaster/insert', item, {})
        if (res.rsCode === 0) {
          if(this.resDisaster.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
        };
      } else {
        const res = await this.connect.run('/project/disaster/update', item, {});
        if (res.rsCode === 0) {
          if(this.resDisaster.rsMap.length === (i + 1)) {
            this.toast.present({ message: '저장 되었습니다.', color: 'primary' });
          }
        };
      }
    });
  }
}