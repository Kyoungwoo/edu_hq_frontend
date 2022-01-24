export class SignUpCompanyInfo {
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

/** PROFILE - 프로필 // BASIC_SAFE_EDU - 안전교육수료 // CERTIFY - 자격증 */
export type SignUpViewType = 'PROFILE'|'BASIC_SAFE_EDU'|'CERTIFY';