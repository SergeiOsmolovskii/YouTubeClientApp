import { Component, Input, OnInit } from '@angular/core';
import { IResponseItem } from '../../models/video-response.model';

@Component({
  selector: 'app-detailed-video-info',
  templateUrl: './detailed-video-info.component.html',
  styleUrls: ['./detailed-video-info.component.scss']
})
export class DetailedVideoInfoComponent /* implements OnInit */ {
  @Input() videoInfo!: IResponseItem;

  constructor() { }

/*   ngOnInit(): void {
  } */

}
