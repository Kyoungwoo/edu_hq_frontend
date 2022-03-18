import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit {

  @Input() totalCount:number = 0;
  @Input() limitNo:number = 0;
  @Input() adminPageNo:number = 10; // 한 페이저에 들어가는 페이지 갯수
  @Input() adminLimitNo:number = 20; // 한페이지에 보이는 아이템 갯수

  @Output() pagerChange = new EventEmitter();
  
  adminNavArray:any = [];

  pageTotalCount = [];
  
  listLoading:boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.listLoading = false;
    }, 1000);
  }

  present() {
    //make view
    let activeNavGroup = Math.floor(Math.floor(this.limitNo / this.adminLimitNo) / this.adminPageNo) * this.adminPageNo;
    this.adminNavArray = Array(this.adminPageNo).fill(1).map((x, i) => {
      let page = activeNavGroup + i + 1;
      if(page * this.adminLimitNo >= this.totalCount + this.adminLimitNo) {
        page = null;
      }
      if(!this.pageTotalCount.includes(page) && page !== null) this.pageTotalCount.push(page);
      return page;
    });
    this.adminNavArray = this.cleanArr(this.adminNavArray);
    return this.adminNavArray;
  }

  pageChange(page) {
    if(this.listLoading) return;
    let limitNo = this.limitNo + this.adminLimitNo;
    if(limitNo >= this.totalCount) {
      this.limitNo = Math.floor(this.adminLimitNo * (page - 1));
    } else {
      this.limitNo = (page - 1) * this.adminLimitNo;
    }
    this.pagerChange.emit(this.limitNo);
  }

  cleanArr(arr) {
    let newArr = new Array();
    for (let i = 0; i < arr.length; i++) {
      if(arr[i]) {
          newArr.push(arr[i]);
      }
    }
    return newArr.length;
  }
  init(){
    let limitNo = this.limitNo + this.adminLimitNo;
    let initcount = Math.floor(limitNo/this.adminLimitNo);
    return initcount
  }
    adminNavPrev() {
    let limitNo = this.limitNo - this.adminLimitNo;
    if(limitNo < 0) {
      this.limitNo = 0;
    } else {
      this.limitNo -= this.adminLimitNo;
    }
    this.pagerChange.emit(this.limitNo);
  }
  adminNavNext() {
    let limitNo = this.limitNo + this.adminLimitNo;
    if(limitNo >= this.totalCount) {
      limitNo/this.adminLimitNo
    } else {
      this.limitNo += this.adminLimitNo;
    }

    this.pagerChange.emit(this.limitNo);
  }
}
