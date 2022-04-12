import { Component, OnInit } from '@angular/core';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';

@Component({
  selector: 'app-risk-pending-list',
  templateUrl: './risk-pending-list.page.html',
  styleUrls: ['./risk-pending-list.page.scss'],
})
export class RiskPendingListPage implements OnInit {

  form = {
    limit_no: 0
  }

  res:ConnectResult;

  constructor(
    private connect: ConnectService
  ) { }

  ngOnInit() {
    this.get();
  }

  async get(limit_no = this.form.limit_no) {
    this.form.limit_no = limit_no;
    this.res = await this.connect.run('/risk/assessment/approval/req/get', this.form, { loading: true });
    if(this.res.rsCode === 0 || this.res.rsCode === 1008) {

    }
    else {
      // this.
    }
  }
}
