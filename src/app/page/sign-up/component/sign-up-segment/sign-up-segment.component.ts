import { LanguagePackService } from './../../../../basic/service/core/language-pack.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserType } from 'src/app/basic/service/core/user.service';

@Component({
  selector: 'app-sign-up-segment',
  templateUrl: './sign-up-segment.component.html',
  styleUrls: ['./sign-up-segment.component.scss'],
})
export class SignUpSegmentComponent implements OnInit {

  @Input() step:'step1' | 'step2' | 'step3' | 'step4';
  @Input() type:UserType;

  constructor(
    public languagePack: LanguagePackService
  ) { }

  ngOnInit() {}

}
