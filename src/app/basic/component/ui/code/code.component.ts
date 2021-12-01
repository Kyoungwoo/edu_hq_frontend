import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {

  @ViewChild('codeEl') codeEl:HTMLElement;

  @Input() code:string;

  constructor() { }

  ngOnInit() {
    console.log(this.code);
  }

}
