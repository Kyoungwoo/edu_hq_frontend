import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FileService } from 'src/app/basic/service/core/file.service';
import { LanguagePackService } from 'src/app/basic/service/core/language-pack.service';
import { UserService } from 'src/app/basic/service/core/user.service';
import { EducationGetForm } from '../my-page/my-page.page';

@Component({
  selector: 'app-my-page-education-search',
  templateUrl: './my-page-education-search.page.html',
  styleUrls: ['./my-page-education-search.page.scss'],
})
export class MyPageEducationSearchPage implements OnInit {

  @Input() educationGetForm:EducationGetForm;

  m_educationGetForm:EducationGetForm;

  constructor(
    private user: UserService,
    private _modal: ModalController,
    private file: FileService,
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {
    this.m_educationGetForm = this.file.clone(this.educationGetForm);
  }

  reset() {
    const { belong_data } = this.user.userData;
    this.m_educationGetForm.project_id = belong_data.project_id;
    this.m_educationGetForm.project_name = belong_data.project_name;
    this.m_educationGetForm.ctgo_education_safe_types = [];
    this.m_educationGetForm.search_text = '';
  }

  search() {
    this._modal.dismiss(this.m_educationGetForm);
  }

}
