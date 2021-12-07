import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {

  @Input() mode:'light' | 'dark' | 'theme' = 'theme';
  @Input() src:string;

  constructor() { }

  ngOnInit() {}

}
