import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-evaluation',
  templateUrl: './ptw-risk-evaluation.page.html',
  styleUrls: ['./ptw-risk-evaluation.page.scss'],
})
export class PtwRiskEvaluationPage implements OnInit {
  editable ={
    add:true,
    company_id:true,
    my_state: true
  }

  constructor(

  ) { }

  ngOnInit() {}

}
