import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }

  /** 교육 시간의 시간단위 number값 가져오기 */
  parseEducationHours(item) {
    const completeHourArr = item.education_complete_time?.split(':') || ['00','00'];
    item.education_complete_hours = parseInt(completeHourArr[0]) + (parseInt(completeHourArr[1])/60);
    
    const needHourArr = item.education_need_time?.split(':') || ['00','00'];
    item.education_need_hours = parseInt(needHourArr[0]) + (parseInt(needHourArr[1])/60);

    const recommendHourArr = item.recommend_time?.split(':') || ['00','00'];
    item.recommend_hours = parseInt(recommendHourArr[0]) + (parseInt(recommendHourArr[1])/60);
  }
}
