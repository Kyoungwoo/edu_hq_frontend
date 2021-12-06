import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/basic/app.animation';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [ fadeInAnimation ]
})
export class SideMenuComponent implements OnInit {
  
  document:boolean = false;
  sign:boolean = false;
  risk:boolean = false;
  smart:boolean = false;
  
  constructor() { }

  ngOnInit() {}

  test(){
    console.log(this.document);
    if(this.document) {
      this.document = false
    } else {
      this.document = true
    }
  }
}
