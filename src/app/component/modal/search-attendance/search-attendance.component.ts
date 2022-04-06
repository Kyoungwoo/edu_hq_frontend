import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
import { PromiseService } from 'src/app/basic/service/util/promise.service';

export class Education {
  ctgo_job_position_name_kr: "";
  company_id: 0;
  ctgo_safe_job_name_kr: "";
  user_id: 0;
  ctgo_job_position_id: 0;
  user_name: "";
  company_name: "";
  user_safe_job_id: 0;
  ctgo_safe_job_id: 0;
  checked = false;
}
@Component({
  selector: 'app-search-attendance',
  templateUrl: './search-attendance.component.html',
  styleUrls: ['./search-attendance.component.scss'],
})
export class SearchAttendanceComponent implements OnInit {

  @Input() set project_id(_project_id: number) {
    this.form.project_id = _project_id;
  }
  @Input() allState: boolean = false;
  @Input() editable: boolean = false;
  @Input() multiple: boolean = false;
  @Input() educationType: boolean = false;
  @Input() value;

  form = {
    user_type: '',
    project_id: 0,
    search_text: ''
  }

  res: ConnectResult<Education>;

  selectAll: boolean;
  values: Education[] = [];
  newValues: Education[] = [];

  allBusinessRegisterNoChecked: boolean = false;


  constructor(
    private connect: ConnectService,
    private toast: ToastService,
    private _modal_: ModalController,
    private promise: PromiseService
  ) { }

  ngOnInit() {
    console.log(this.value);
    if (this.educationType) {
      this.form.user_type = '관리자';
    }
    else this.form.user_type = '작업자';
    this.get();
    this.getItem();
  }


  async get() {
    this.res = await this.connect.run('/category/education/manager/get', this.form);
    if (this.res.rsCode === 0) {
      console.log("this.value",this.value);
      if (this.value) {
        this.res?.rsMap?.filter(item => {
          if (this.value.indexOf(item.user_id) > -1) {
            item.checked = true;
          }
        });
      }
    } else {
      this.toast.present({ color: 'warning', message: this.res.rsMsg });
    }
  }

  async getItem() {
    await this.promise.wait(() => this.res);
    if (this.value) [
      this.res?.rsMap?.filter(item => {
        if (this.value.indexOf(item.user_id) > -1) {
          this.values.push(item);
          console.log(this.values);
          item.checked = true;
        }
      })
    ]
  }

  selectItem(item) {
    item.checked = !item.checked;
    if (item.checked) {
      if (!this.values.includes(item)) this.values.push(item);
    } else {
      const index = this.values.findIndex((data) => data === item);
      this.values.splice(index, 1);
    }
  }

  deleteData(i, name) {
    console.log(i);
    this.res.rsMap.forEach((item) => {
      if (item.user_id === name.user_id) {
        item.checked = false;
      }
    });
    this.values.splice(i, 1);
  }

  dismiss() {
    this._modal_.dismiss();
  }
  submit() {
    this._modal_.dismiss(this.values);
  }
}
