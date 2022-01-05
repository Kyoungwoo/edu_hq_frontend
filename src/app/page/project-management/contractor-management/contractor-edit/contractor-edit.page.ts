import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor-edit',
  templateUrl: './contractor-edit.page.html',
  styleUrls: ['./contractor-edit.page.scss'],
})
export class ContractorEditPage implements OnInit {

  textarea = '개인정보 위탁 동의서';
  constructor() { }

  ngOnInit() {
  }

}
