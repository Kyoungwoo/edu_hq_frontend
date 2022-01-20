import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-project-area-set',
  templateUrl: './project-area-set.component.html',
  styleUrls: ['./project-area-set.component.scss'],
})
export class ProjectAreaSetComponent implements OnInit {

  mapData = [];
  constructor(
    private modal_:ModalController
  ) { }

  ngOnInit() {}
  
  submint() {
    console.log("----------------",this.mapData);
    this.modal_.dismiss(this.mapData)
  }
}
