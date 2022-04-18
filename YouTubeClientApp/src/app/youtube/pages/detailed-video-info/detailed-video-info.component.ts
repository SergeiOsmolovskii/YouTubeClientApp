import { Component, Input, OnInit } from '@angular/core';
import { IResponseItem } from '../../models/video-response.model';
import { ActivatedRoute } from '@angular/router';
import { VideoResponseService } from '../../services/video-response/video-response.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detailed-video-info',
  templateUrl: './detailed-video-info.component.html',
  styleUrls: ['./detailed-video-info.component.scss'],
})

export class DetailedVideoInfoComponent implements OnInit {
  public videoInfo!: IResponseItem;

  constructor(
    private routInfo: ActivatedRoute,
    private videoResponse: VideoResponseService,
    private location: Location
  ) {}

  ngOnInit(): void {
    if (this.routInfo.snapshot.params['id']) {
      this.videoResponse
        .getStatic([this.routInfo.snapshot.params['id']])
        .subscribe((data) => {
          this.videoInfo = data.items[0];
        });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
