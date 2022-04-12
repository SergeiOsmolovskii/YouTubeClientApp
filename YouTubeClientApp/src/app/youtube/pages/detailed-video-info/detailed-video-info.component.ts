import { Component, Input, OnInit } from '@angular/core';
import { IResponseItem } from '../../models/video-response.model';
import { ActivatedRoute } from '@angular/router';
import { VideoResponseService } from '../../services/video-response/video-response.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailed-video-info',
  templateUrl: './detailed-video-info.component.html',
  styleUrls: ['./detailed-video-info.component.scss']
})
export class DetailedVideoInfoComponent implements OnInit {
  public videoInfo!: IResponseItem;

  constructor(
    private routInfo: ActivatedRoute, 
    private videoResponse: VideoResponseService, 
    private location: Location) { }

  ngOnInit(): void {
    this.videoInfo = this.getCurrentItem(this.routInfo.snapshot.params["id"]);
  }

  getCurrentItem(id: string): IResponseItem {
    return this.videoResponse.response.find(item => item.id === id)!;
  }

  goBack(): void {
    this.location.back();
  }
}