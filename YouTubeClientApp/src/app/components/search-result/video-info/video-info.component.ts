import { Component, Input } from '@angular/core';
import { IResponseItem } from 'src/app/models/video-response.model';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss']
})

export class VideoInfoComponent {
  @Input() videoInfo!: IResponseItem;

}
