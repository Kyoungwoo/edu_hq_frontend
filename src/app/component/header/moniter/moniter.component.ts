import { Component, OnInit } from '@angular/core';


interface Tab {
  text:string
}

@Component({
  selector: 'app-moniter-header',
  templateUrl: './moniter.component.html',
  styleUrls: ['./moniter.component.scss'],
})
export class MoniterComponent implements OnInit {

  tabList:Tab[] = [
    { text: '통합관제' },
    { text: 'CCTV 모니터링' },
    { text: '근로자 실시간 위치 모니터링' }
  ]

  tabActive:Tab = this.tabList[0];

  
  constructor() { }
  
  ngOnInit() {}
  
  tabClick(tab, i) {
    console.log(tab);
    this.tabActive = tab;
  }
}
