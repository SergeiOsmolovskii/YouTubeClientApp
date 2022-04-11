import { Component } from '@angular/core';
import { SortSearchService } from 'src/app/services/sort-search.service';
import { VideoResponseService } from 'src/app/services/video-response.service';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
})

export class SortPanelComponent {
  constructor(
    public videoResponse: VideoResponseService,
    public sortSearch: SortSearchService
  ) { }
  
}