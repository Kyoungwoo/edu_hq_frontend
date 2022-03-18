import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  @HostBinding('class') get class() {
    const _class = [];
    if(this.type) _class.push(`table-${this.type}`);
    return _class.join(' ');
  }

  @Input() type:'card';

  constructor() { }

  ngOnInit() {}

}
