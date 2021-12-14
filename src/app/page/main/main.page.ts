import { Component, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/basic/service/core/connect.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
    private connect:ConnectService
  ) { }

  ngOnInit() {
    
  }


}
