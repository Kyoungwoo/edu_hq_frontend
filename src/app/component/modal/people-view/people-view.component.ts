import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/basic/basic.animation';

@Component({
  selector: 'app-people-view',
  templateUrl: './people-view.component.html',
  styleUrls: ['./people-view.component.scss'],
  animations: [fadeInAnimation]
})
export class PeopleViewComponent implements OnInit {

  menu:boolean = false;
  constructor() { }

  ngOnInit() {}

}
