import { Component, OnInit } from '@angular/core';
import { SortSearchService } from 'src/app/youtube/services/sort-search/sort-search.service';
import { VideoResponseService } from 'src/app/youtube/services/video-response/video-response.service';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss'],
})
export class SortPanelComponent implements OnInit {
  constructor(
    public videoResponse: VideoResponseService,
    public sortSearch: SortSearchService
  ) {}

  ngOnInit(): void {
    console.log('SortPanelComponent');
  }
}
