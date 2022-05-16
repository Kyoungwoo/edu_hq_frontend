import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SafetyEducationResultEditPage } from '../page/safety-education/education-result/safety-education-result-edit/safety-education-result-edit.page';
import { RiskEvaluationEditPage } from '../page/work-plan/risk-assessment/risk-evaluation-edit/risk-evaluation-edit.page';
import { WorkerMinutesEditPage } from '../page/work-plan/work-minutes/worker-minutes-edit/worker-minutes-edit.page';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {

  constructor(
    private _modal: ModalController
  ) { }

  async getComponent(ctgo_approval_module_id, target_id) {
    switch(ctgo_approval_module_id) {
      case 1: { // 교육 결과 보고서 (채용시)
        const modal = await this._modal.create({
          component: SafetyEducationResultEditPage,
          cssClass: 'safety-meeting-class',
          componentProps:{
            education_safe_report_id: target_id
          }
        });
        modal.present();
        return '';
      }
      case 2: { // 교육 결과 보고서 (작업자 정기)
        const modal = await this._modal.create({
          component: SafetyEducationResultEditPage,
          cssClass: 'safety-meeting-class',
          componentProps:{
            education_safe_report_id: target_id
          }
        });
        modal.present();
        return '';
      }
      case 3: { // 교육 결과 보고서 (관리감독자 정기) - 1차에 안함
        const modal = await this._modal.create({
          component: SafetyEducationResultEditPage,
          cssClass: 'safety-meeting-class',
          componentProps:{
            education_safe_report_id: target_id
          }
        });
        modal.present();
        return '';
      }
      case 4: { // 교육 결과 보고서 (작업 내용 변경 시)
        const modal = await this._modal.create({
          component: SafetyEducationResultEditPage,
          cssClass: 'safety-meeting-class',
          componentProps:{
            education_safe_report_id: target_id
          }
        });
        modal.present();
        return '';
      }
      case 5: { // 교육 결과 보고서 (특별 교육)
        const modal = await this._modal.create({
          component: SafetyEducationResultEditPage,
          cssClass: 'safety-meeting-class',
          componentProps:{
            education_safe_report_id: target_id
          }
        });
        modal.present();
        return '';
      }
      case 6: { // 최초 위험성 평가서
        const modal = await this._modal.create({
          component: RiskEvaluationEditPage,
          cssClass: 'risk-evaluation-class',
          componentProps:{
            risk_asment_id: target_id
          }
        });
        modal.present();
        return '';
      }
      case 7: { // 정기 위험성 평가서
        const modal = await this._modal.create({
          component: RiskEvaluationEditPage,
          cssClass: 'risk-evaluation-class',
          componentProps:{
            risk_asment_id: target_id
          }
        });
        modal.present();
        return '';
      }
      case 8: { // 수시 위험성 평가서
        const modal = await this._modal.create({
          component: RiskEvaluationEditPage,
          cssClass: 'risk-evaluation-class',
          componentProps:{
            risk_asment_id: target_id
          }
        });
        modal.present();
        return '';
      }
      case 9:  { // 산업안전보건위원회 회의록
        const modal = await this._modal.create({
          component: WorkerMinutesEditPage,
          cssClass: 'safety-meeting-class',
          componentProps:{
            safety_meeting_id: target_id
          }
        });
        modal.present();
        return '';
      }
      case 10: { // 노사협의체 회의록
        const modal = await this._modal.create({
          component: WorkerMinutesEditPage,
          cssClass: 'safety-meeting-class',
          componentProps:{
            safety_meeting_id: target_id
          }
        });
        modal.present();
        return '';
      }
      case 11: { // 안전 및 보건에 관한 협의체 회의록
        const modal = await this._modal.create({
          component: WorkerMinutesEditPage,
          cssClass: 'safety-meeting-class',
          componentProps:{
            safety_meeting_id: target_id
          }
        });
        modal.present();
        return '';
      }
      case 12: { // 위험 공종 안전 작업허가서(PTW) - 2차
        return '';
      }
    }
  }
}
