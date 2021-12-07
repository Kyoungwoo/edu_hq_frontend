import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileBlob } from 'src/app/basic/service/file.service';
import { CameraService } from 'src/app/basic/service/native/camera.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {

  @Input() readonly:boolean = true;
  @Input() url:string = null;
  @Output() change:EventEmitter<FileBlob> = new EventEmitter();

  constructor(
    private camera: CameraService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.url)
    }, 1000);
  }

  async profileClick() {
    const blob = await this.camera.getPhoto({
      width: 320,
      height: 320
    });
    this.change.emit(blob);
  }

}
