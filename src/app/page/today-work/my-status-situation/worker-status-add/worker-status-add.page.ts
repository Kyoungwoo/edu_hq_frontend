import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-worker-status-add',
  templateUrl: './worker-status-add.page.html',
  styleUrls: ['./worker-status-add.page.scss'],
})
export class WorkerStatusAddPage implements OnInit {
  dummyArr = [
    {
      checked:false,
      title:'앱 사용 공지',
      company:'구일종합건설㈜',
      user_name:'김준태',
      write_date:'2021.10.18',
      status:'입장',
      status_hour:'12:30'
    },
    {
      checked:false,
      title:'dev 공지',
      company:'구일종합건설㈜',
      user_name:'홍길동',
      write_date:'2021.10.18',
      status:'입장',
      status_hour:'12:31'
    },
    {
      checked:false,
      title:'gsil 공지',
      company:'구일종합건설㈜',
      user_name:'구루무',
      write_date:'2021.10.18',
      status:'퇴장',
      status_hour:'12:33'
    },
    {
      checked:false,
      title:'LH 공지',
      company:'구일종합건설㈜',
      user_name:'구구야',
      write_date:'2021.10.18',
      status:'퇴장',
      status_hour:'12:36'
    },
  ]
  selectData = [];
  constructor(
    private _modal : ModalController
  ) { }

  ngOnInit() {
  }

  checkName(item) {
    // console.log(item);
    item.checked = !item.checked;
    if(item.checked){
      this.selectData.push(item.user_name);
      this.selectData = this.selectData.filter((data,index) => {
        return this.selectData.indexOf(data) === index;
      });
    }
  }

  deleteName() { 
    this.dummyArr.forEach((item,i) => {
      if(!item.checked){
       this.selectData.forEach((i) => {
         this.selectData.splice(i,1);
       }) 
      }
    })
  }

  submit() {
    this._modal.dismiss({
      user_name:this.selectData
    })  
  }
}
