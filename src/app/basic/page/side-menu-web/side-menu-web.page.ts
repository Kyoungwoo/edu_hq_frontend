import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from '../../app.animation';

@Component({
  selector: 'app-side-menu-web',
  templateUrl: './side-menu-web.page.html',
  styleUrls: ['./side-menu-web.page.scss'],
  animations: [ fadeInAnimation ]
})
export class SideMenuWebPage implements OnInit {

  document:boolean = false;
  sign:boolean = false;
  risk:boolean = false;
  smart:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
}
