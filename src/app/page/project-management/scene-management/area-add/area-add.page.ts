import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ConnectService } from 'src/app/basic/service/core/connect.service';
import { ToastService } from 'src/app/basic/service/ionic/toast.service';

@Component({
  selector: 'app-area-add',
  templateUrl: './area-add.page.html',
  styleUrls: ['./area-add.page.scss'],
})
export class AreaAddPage implements OnInit {

  @Input() area;
  @Input() project_id;
  @Input() area_id;
  @Input() selectData;
  @Input() area_top_id;
  @Input() area_middle_id;

  area_top_name:string = '';
  area_middle_name:string = '';
  area_bottom_name:string = '';

  title: string;
  constructor(
    private _modal: ModalController,
    private connect: ConnectService,
    private alert: AlertController,
    private toast: ToastService
  ) { }

  ngOnInit() {
    if(this.selectData) {
      this.title = '수정';
      this.area_top_name = this.selectData.area_top_name;
      this.area_middle_name = this.selectData.area_middle_name;
      this.area_bottom_name = this.selectData.area_bottom_name;
      console.log(this.area_middle_name);
    } else this.title = '추가';
    console.log(this.selectData);
  }

  async submit() {
    if(!this.selectData) {
      const alert = await this.alert.create({
        message:'장소를 추가 하시겠습니까?',
        buttons:[
          {text:'아니요'},
          {text:'예',
            handler: async() => {
              switch (this.area) {
                case 'area1':
                  if(!this.area_top_name) return this.toast.present({message:'장소를 적어주세요.',color:'danger'});
                  const resarea1 = await this.connect.run('/project/area/top/insert',{
                    project_id:this.project_id,
                    area_top_name:this.area_top_name
                  });
                  if(resarea1.rsCode === 0) {
                    this._modal.dismiss('Y');
                  };
                  break;
                case 'area2':
                  if(!this.area_middle_name) return this.toast.present({message:'장소를 적어주세요.',color:'danger'});
                  const resarea2 = await this.connect.run('/project/area/middle/insert',{
                    area_top_id:this.area_top_id,
                    area_middle_name:this.area_middle_name
                  });
                  if(resarea2.rsCode === 0) {
                    this._modal.dismiss(this.area_top_id);
                  };
                  break;
                case 'area3':
                  if(!this.area_bottom_name) return this.toast.present({message:'장소를 적어주세요.',color:'danger'});
                  const resarea3 = await this.connect.run('/project/area/bottom/insert',{
                    area_top_id:this.area_top_id,
                    area_middle_id:this.area_middle_id,
                    area_bottom_name:this.area_bottom_name
                  });
                  if(resarea3.rsCode === 0) {
                    this._modal.dismiss(this.area_middle_id);
                  };
                  break;
              }
            }
          }
        ]
      });
      alert.present();
    }
    else { 
      const alert = await this.alert.create({
        message:'장소를 수정 하시겠습니까?',
        buttons:[
          {text:'아니요'},
          {text:'예',
            handler: async() => {
              switch (this.area) {
                case 'area1':
                  if(!this.area_top_name) return this.toast.present({message:'장소를 적어주세요.',color:'danger'});
                  const area1 = await this.connect.run('/project/area/top/update',{
                    project_id:this.project_id,
                    area_top_name:this.area_top_name,
                    area_top_id:this.selectData.area_top_id
                  });
                  if(area1.rsCode === 0) {
                    this._modal.dismiss('Y');
                  };
                  break;
                case 'area2':
                  if(!this.area_middle_name) return this.toast.present({message:'장소를 적어주세요.',color:'danger'});
                  const area2 = await this.connect.run('/project/area/middle/update',{
                    area_top_id:this.area_top_id,
                    area_middle_name:this.area_middle_name,
                    area_middle_id:this.selectData.area_middle_id
                  });
                  if(area2.rsCode === 0) {
                    this._modal.dismiss(this.area_top_id);
                  };
                  break;
                case 'area3':
                  if(!this.area_bottom_name) return this.toast.present({message:'장소를 적어주세요.',color:'danger'});
                  const area3 = await this.connect.run('/project/area/bottom/update',{
                    area_top_id:this.area_top_id,
                    area_bottom_id:this.selectData.area_bottom_id,
                    area_middle_id:this.area_middle_id,
                    area_bottom_name:this.area_bottom_name
                  });
                  if(area3.rsCode === 0) {
                    this._modal.dismiss(this.area_middle_id);
                  };
                  break;
              }
            }
          }
        ]
      });
      alert.present();
    }
  }
}
