import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DateService } from 'src/app/basic/service/util/date.service';

@Component({
  selector: 'app-safety-education-detail-search',
  templateUrl: './safety-education-detail-search.page.html',
  styleUrls: ['./safety-education-detail-search.page.scss'],
})
export class SafetyEducationDetailSearchPage implements OnInit {

  form = {
    company_id:0,
    ctgo_education_safe_id:0,
    education_safe_state:'전체',
    end_date:this.date.today({date:7}),
    limit_no:0,
    project_id:0,
    search_text:'',
    start_date:this.date.today()
    // start_date:"2021-01-01",
    // end_date:"2022-12-12"
  }
  constructor(
    private date: DateService,
    private _modal: ModalController
  ) { }

  ngOnInit() {
    
  }
  reset() {
   
  this.form = null;
  }
  select() {
    console.log(this.form);
    // this._modal.dismiss(this.form);
  }
}
