import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {

  @Input() mode:'light' | 'dark' | 'theme' = 'theme';
  @Input() set name(v:string) { 
    this.src = `assets/basic/img/${v}.svg`;
  };
  @Input() src:string;

  constructor() { }

  ngOnInit() {}

}
