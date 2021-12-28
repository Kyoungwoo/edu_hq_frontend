import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-standard-set',
  templateUrl: './area-standard-set.page.html',
  styleUrls: ['./area-standard-set.page.scss'],
})
export class AreaStandardSetPage implements OnInit {

  menuCount:Number = 1;
  testarr=
  [
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
    {
      text:'1블록'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
