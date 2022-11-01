import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-incongruity-edit',
  templateUrl: './incongruity-edit.page.html',
  styleUrls: ['./incongruity-edit.page.scss'],
})
export class IncongruityEditPage implements OnInit {

  constructor(
    private _modal: ModalController,
  ) {
  }

  ngOnInit() {
    this.tab();
  }

  /**
   * 탭 스크립트
   */
tab(){
  const tabBtn = document.querySelectorAll('.tab_btn');
  const tabCont = document.querySelectorAll('.tab_edit');
  // const tabFoot = document.querySelectorAll('.btn_foot');

  for(let i=0; i<tabBtn.length; i++){
    tabBtn[i].addEventListener('click', ()=>{
      for(let i=0; i<tabCont.length; i++){
        tabCont[i].classList.remove('active');
        // tabFoot[i].classList.remove('active');
      }
        tabCont[i].classList.add('active');
        // tabFoot[i].classList.add('active');
    })
  }
}
}
