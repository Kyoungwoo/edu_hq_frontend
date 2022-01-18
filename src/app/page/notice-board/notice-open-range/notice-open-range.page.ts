import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectResult, ConnectService } from 'src/app/basic/service/core/connect.service';
import { SearchAreaComponent } from 'src/app/component/modal/search-area/search-area.component';

@Component({
  selector: 'app-notice-open-range',
  templateUrl: './notice-open-range.page.html',
  styleUrls: ['./notice-open-range.page.scss'],
})
export class NoticeOpenRangePage implements OnInit {

  menuCount:Number = 1;
  list=
  [
    {
      checked:false,
      text:'전체'
    },
    {
      checked:false,
      text:'내 소속사만'
    },
    {
      checked:false,
      text:'협력사별'
    },
  ]

  list1=
  [
    {
      checked:false,
      text:'전체(관리자+작업자)'
    },
    {
      checked:false,
      text:'관리자만'
    },
    {
      checked:false,
      text:'작업자만'
    },
  ]

  res:ConnectResult <{
    company_ceo: string
    company_id: Number
    company_name: string
    checked:boolean
  }>

  constructor(
    private modal : ModalController,
    private connect:ConnectService
  ) { }

  async ngOnInit() {
    // const modal = await this.modal.create({
    //   component:SearchAreaComponent
    // });
    // modal.present();
  }

  async partnerCtgo(){
    this.res = await this.connect.run('/category/certify/company/get',{
      company_contract_type:'협력사',
      search_text:''
    });
    if(this.res.rsCode === 0) [ 
      console.log(this.res)
    ]
  }


  areaOne(item) {
    this.list1.forEach(data => {
      item === data.text ? data.checked = true : data.checked = false;
    });

    if(item !== '전체'){
      
    } else {
      this.list1 = null;
    }
  }

  areaTow(item?){
    if(item !== '전체(관리자+작업자)') this.partnerCtgo();
    else this.res = null;
    this.list1.forEach(data => {
      item === data.text ? data.checked = true : data.checked = false;
    })
  }
  
  partnerCheck(item) {
    console.log(item);
    this.res.rsMap.forEach(data => {
      item === data.company_id ? data.checked = true : data.checked = false;
    });
  }
}
