import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GpsCoordinateData } from 'src/app/basic/component/input/naver-map/naver-map.component';
import { FileService } from 'src/app/basic/service/core/file.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';
@Component({
  selector: 'app-project-area-set',
  templateUrl: './project-area-set.component.html',
  styleUrls: ['./project-area-set.component.scss']
})
export class ProjectAreaSetComponent implements OnInit {

  @Input() gps_coordinate_data;
  @Input() disabled:boolean = false;
  mapData:GpsCoordinateData;

  constructor(
    private _modal:ModalController,
    private toast:ToastService,
    private file: FileService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    if(this.gps_coordinate_data) this.mapData = this.file.clone(this.gps_coordinate_data);
  }
  
  submit() {
    console.log(this.mapData);
    if(this.mapData?.gps_latitude.length < 3) {
      this.toast.present({message:'점을 3개 이상 설정해주세요.',color:'danger'});
    } else {
      this._modal.dismiss(this.mapData);
    }
  }
}
