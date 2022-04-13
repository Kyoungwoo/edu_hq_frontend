export class SignUpCompanyInfo {
  company_contract_type:'원청사' | '협력사' | '감리사';
  company_id:number = null;
  business_register_no:number = null;
  company_name:string = null;
  company_ceo:number = null;
}
export class SignUpCountryMock {
  ctgo_country_id:number = 1;
  ctgo_country_name:string = 'test';
}
export class SignUpCompanyInfoMock {
  company_id:number = 1;
  business_register_no:number = null;
  company_name:string = null;
  company_ceo:number = null;
}
export class SignUpProjectInfoMock {
  project_code = "PKWA46";
  project_id = 61;
  project_name = "데브현장";
}

export class SignUpTerms {
  system_terms:number = null; // 시스템 이용약관
  personal_terms:number = null; // 개인정보 이용약관
  sensitive_terms?:number = null; // 민감정보 이용약관
  gps_terms:number = null; // 위치정보 이용약관
  sharing_terms:number = null; // 제 3자 정보제공 이용약관
}

/** PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증 */
export type SignUpViewType = 'PROFILE'|'BASIC_SAFE_EDU'|'CERTIFY';