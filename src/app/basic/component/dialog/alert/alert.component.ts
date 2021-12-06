import { Component, Input, OnInit } from '@angular/core';
import { AlertOptions } from 'src/app/basic/service/ionic/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  @Input() opts:AlertOptions;

  constructor() {
    console.log(this.opts);
   }

  ngOnInit() {
    console.log(this.opts);
  }

}
