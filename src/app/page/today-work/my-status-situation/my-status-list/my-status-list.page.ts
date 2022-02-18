import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/basic/service/ionic/nav.service';

@Component({
  selector: 'app-my-status-list',
  templateUrl: './my-status-list.page.html',
  styleUrls: ['./my-status-list.page.scss'],
})
export class MyStatusListPage implements OnInit {

  open:boolean = false;
  dummyArr = [
    {
      open: false,
      title:'앱 사용 공지',
      company:'구일종합건설㈜',
      user_name:'김준태',
      write_date:'2021.10.18',
      status:'입장',
      status_hour:'12:30'
    },
    {
      open: false,
      user_id:2,
      title:'dev 공지',
      company:'구일종합건설㈜',
      user_name:'김준태',
      write_date:'2021.10.18',
      status:'입장',
      status_hour:'12:31'
    },
    {
      open: false,
      user_id:3,
      title:'gsil 공지',
      company:'구일종합건설㈜',
      user_name:'김준태',
      write_date:'2021.10.18',
      status:'퇴장',
      status_hour:'12:33'
    },
    {
      open: false,
      user_id:4,
      title:'LH 공지',
      company:'구일종합건설㈜',
      user_name:'김준태',
      write_date:'2021.10.18',
      status:'퇴장',
      status_hour:'12:36'
    },
  ]
  hourArr1 = [
    {
      status:'입장',
      status_hour:'12:30'
    },
    {
      status:'입장',
      status_hour:'12:31'
    },
    {
      status:'퇴장',
      status_hour:'12:33'
    },
    {
      user_id:2,
      status:'퇴장',
      status_hour:'12:36'
    },
  ]

  constructor(
    private nav:NavService
  ) { }

  ngOnInit() {

  }

  status(item) {
    item.open = !item.open;
  }

  workerSatus() {
    this.nav.navigateForward('/worker-status-list');
  }
}
