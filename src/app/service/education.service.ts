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
    
    const recommendHourArr = item.education_recommended_time?.split(':') || ['00','00'];
    item.education_recommended_hours = parseInt(recommendHourArr[0]) + (parseInt(recommendHourArr[1])/60);
  }

  /** 교육 상태값 가져오기 */
  getEducationSpecialResult(type: '일용직' | '상용직', item):'필요'|'양호'|'기한초과' {
    if(type === '상용직') {
      return item.special_edu_state;
    }
    else {
      return item.education_complete_hours < (item.education_towercrane_state ? 8 : 2) ? '필요' : '양호';
    }
  }
}
