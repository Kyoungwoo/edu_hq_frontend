import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-area-add',
  templateUrl: './area-add.page.html',
  styleUrls: ['./area-add.page.scss'],
})
export class AreaAddPage implements OnInit {

  @Input() area;

  text:string;
  constructor(
    private _modal : ModalController
  ) { }

  ngOnInit() {
    console.log("this.area",this.area);
  }

  submit(){
    console.log("this.text",this.text);
    this._modal.dismiss({
      text:this.text
    })
  } 
}
