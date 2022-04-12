import { Component } from '@angular/core';
import { VideoResponseService } from 'src/app/youtube/services/video-response/video-response.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})

export class MainHeaderComponent {
  
  public isSettingsVisible = false;
  public word = 'angular';
  
  constructor(private videoResponse: VideoResponseService) { }

  toggleSortSettings(): void {
    if (this.isSettingsVisible) {
      this.isSettingsVisible = false;
    } else this.isSettingsVisible = true;
  }

  displaySearchResult(): void {
    this.videoResponse.getResponse().subscribe(data => {
      this.videoResponse.response = data.items
      this.videoResponse.response.map(item => this.videoResponse.IDArr.push(item.id.videoId));
      this.videoResponse.getStatic().subscribe(data => {
        this.videoResponse.static = data.items;
        this.videoResponse.response.forEach((element, index) => {
          element.statistics = this.videoResponse.static[index].statistics;
        });
      });
    });
  }
  
  search(word: string): void {
    this.videoResponse.word = word;
    this.displaySearchResult();  
  }

}