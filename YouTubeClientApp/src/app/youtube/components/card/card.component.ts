import { Component, Input } from '@angular/core';
import { IResponseItem } from 'src/app/youtube/models/video-response.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input() cards!: IResponseItem;
 
  constructor() { }

}
