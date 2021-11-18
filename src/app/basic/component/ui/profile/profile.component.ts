import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileBlob } from 'src/app/basic/service/file.service';
import { CameraService } from 'src/app/basic/service/native/camera.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  @Input() type:"add"|"normal" = "normal";
  @Input() url:string = null;
  @Output() change:EventEmitter<FileBlob> = new EventEmitter();

  constructor(
    private camera: CameraService
  ) { }

  ngOnInit() {}

  async profileClick() {
    const blob = await this.camera.getPhoto({
      width: 320,
      height: 320
    });
    this.change.emit(blob);
  }
}