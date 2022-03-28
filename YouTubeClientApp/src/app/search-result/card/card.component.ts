import { Component, Input, OnInit } from '@angular/core';
import { IResponseItem } from 'src/app/models/video-response.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cards!: IResponseItem;
 
/*  constructor() { } */

  ngOnInit(): void {
    console.log('CardComponent');
  }

}
