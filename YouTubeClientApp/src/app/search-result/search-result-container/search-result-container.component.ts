import { Component, OnInit } from '@angular/core';
import { IResponseItem } from 'src/app/models/video-response.model';
import { VideoResponseService } from 'src/app/services/video-response.service';

@Component({
  selector: 'app-search-result-container',
  templateUrl: './search-result-container.component.html',
  styleUrls: ['./search-result-container.component.scss']
})
export class SearchResultContainerComponent implements OnInit {

  public cards!: IResponseItem[];

  constructor(private videoResponse: VideoResponseService) { }

  ngOnInit(): void {
    this.videoResponse.getResponse()
      .subscribe(data => this.cards = data.items);
  }

}
