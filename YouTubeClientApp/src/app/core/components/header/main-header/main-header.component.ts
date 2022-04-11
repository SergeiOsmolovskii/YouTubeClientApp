import { Component } from '@angular/core';
import { VideoResponseService } from 'src/app/youtube/services/video-response/video-response.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})

export class MainHeaderComponent {
  
  public isSettingsVisible = false;
  constructor(private videoResponse: VideoResponseService) { }

  toggleSortSettings(): void {
    if (this.isSettingsVisible) {
      this.isSettingsVisible = false;
    } else this.isSettingsVisible = true;
  }

  displaySearchResult(): void {
    this.videoResponse.getResponse().subscribe(data => this.videoResponse.response = data.items);
  }

}