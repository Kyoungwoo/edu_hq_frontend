import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {

  @HostBinding('class') get class() {
    let _class = [];
    if(this.size) _class.push(`container-${this.size}`);
    return _class.join(' ');
  }

  @Input() size:'small' | 'default' | 'large';

  constructor() { }

  ngOnInit() {}

}
