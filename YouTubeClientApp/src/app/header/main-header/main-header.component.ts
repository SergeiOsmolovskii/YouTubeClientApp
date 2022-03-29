import { Component, OnInit, Output } from '@angular/core';
import { VideoResponseService } from 'src/app/services/video-response.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  
  public isSettingsVisible = false;
  constructor(private videoResponse: VideoResponseService) { }

  ngOnInit(): void {
    console.log('MainHeaderComponent');
  }

  toggleSortSettings() {
    if (this.isSettingsVisible === true) {
      this.isSettingsVisible = false;
    } else this.isSettingsVisible = true;
  }

  displaySearchResult() {
    this.videoResponse.getResponse().subscribe(data => this.videoResponse.response = data.items);
  }

}