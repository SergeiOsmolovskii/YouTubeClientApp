import { Component, OnInit } from '@angular/core';
import { IResponseItem } from 'src/app/youtube/models/video-response.model';
import { SortSearchService } from '../../services/sort-search/sort-search.service';
import { VideoResponseService } from '../../services/video-response/video-response.service';
@Component({
  selector: 'app-search-result-container',
  templateUrl: './search-result-container.component.html',
  styleUrls: ['./search-result-container.component.scss']
})
export class SearchResultContainerComponent /* implements OnInit */ {

  public cards: IResponseItem[] = [];
  
  constructor(
    public videoResponse: VideoResponseService, 
    public sortSearch: SortSearchService) {}

/*   ngOnInit(): void {

  } */

}
