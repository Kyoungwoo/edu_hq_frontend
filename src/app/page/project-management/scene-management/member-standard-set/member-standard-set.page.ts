import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-standard-set',
  templateUrl: './member-standard-set.page.html',
  styleUrls: ['./member-standard-set.page.scss'],
})
export class MemberStandardSetPage implements OnInit {

  menuCount:Number = 1;
  constructor() { }

  ngOnInit() {
  }

  async submit(){
    switch(this.menuCount){
      case 1:
        console.log("this.menuCount === 1");
        break;
      case 2:
        console.log("this.menuCount === 2");
        break;
      case 3:
        console.log("this.menuCount === 3");
        break;
      case 4:
        console.log("this.menuCount === 4");
        break;
      case 5:
        console.log("this.menuCount === 5");
        break;
      case 6:
        console.log("this.menuCount === 6");
        break;
      case 7:
        console.log("this.menuCount === 7");
        break;
    }
  }
}
