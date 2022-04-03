import { Component, Input, OnInit } from '@angular/core';
import { IResponseItem } from 'src/app/youtube/models/video-response.model';

@Component({
  selector: 'app-video-info',
  templateUrl: './video-info.component.html',
  styleUrls: ['./video-info.component.scss']
})
export class VideoInfoComponent /* implements OnInit  */{
  @Input() videoInfo!: IResponseItem;

/*   constructor() { } */

/*   ngOnInit(): void {
    console.log('VideoInfoComponent');
  } */

}
