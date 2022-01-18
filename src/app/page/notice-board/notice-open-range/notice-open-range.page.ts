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
  area1:boolean = false;
  area2:boolean = false;
  totalArea = {
    area1:'',
    area2:'',
    area3:'',
    area_id:0
  }

  res:ConnectResult <{
    company_ceo: string
    company_id: number
    company_name: string
    checked:boolean
  }>

  constructor(
    private _modal_ : ModalController,
    private connect:ConnectService
  ) { }

  async ngOnInit() {
    this.list[0].checked = true;
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
    this.list.forEach(data => {
      item === data.text ? data.checked = true : data.checked = false;
      if(data.checked) return this.totalArea.area1 = data.text;
    });
    console.log("this.totalArea",this.totalArea);
    if(item !== '전체') {
      this.area1 = true;
    } else {
      this.area2 = false;
      this.area1 = false;
    }
  }

  areaTow(item?){
    if(item !== '전체(관리자+작업자)') {
      this.area2 = true;
      this.partnerCtgo();
    } else this.area2 = false;
    this.list1.forEach(data => {
      item === data.text ? data.checked = true : data.checked = false;
      if(data.checked) return this.totalArea.area2 = data.text;
    })
  }
  
  partnerCheck(item) {
    console.log(item);
    this.res.rsMap.forEach(data => {
      item === data.company_id ? data.checked = true : data.checked = false;
      if(data.checked) {
        this.totalArea.area3 = data.company_name;
        this.totalArea.area_id = data.company_id
      }
    });
  }
  submit() {
    this._modal_.dismiss(this.totalArea);
  }
}
