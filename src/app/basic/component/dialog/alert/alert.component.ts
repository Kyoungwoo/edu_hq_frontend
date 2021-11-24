import { Component, Input, OnInit } from '@angular/core';
import { AlertOptions } from '@ionic/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  @Input() opts:AlertOptions;

  constructor() { }

  ngOnInit() {}

}
