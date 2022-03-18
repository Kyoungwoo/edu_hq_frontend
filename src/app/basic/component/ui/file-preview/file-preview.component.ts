import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FutItem } from 'src/app/basic/service/core/file.service';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss'],
})
export class FilePreviewComponent implements OnInit {

  @Input() futItem:FutItem;
  @Input() readonly:boolean = false;

  @Output() buttonClick = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}