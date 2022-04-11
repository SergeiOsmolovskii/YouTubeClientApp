import { Injectable } from '@angular/core';
import { currentSortType, sortType } from '../models/video-response.model';
import { currentSortParam, sortParam } from './constants';
import { VideoResponseService } from './video-response.service';

@Injectable({
  providedIn: 'root',
})

export class SortSearchService {
  public dataSort: sortType = '';
  public sortByCount: sortType = '';
  public searchItem: string = '';
  public currentSortParam: currentSortType = '';

  constructor(public videoResponse: VideoResponseService) { }

  switchSortDate(): void {
    this.currentSortParam = currentSortParam.date;
    if (!this.dataSort) {
      this.dataSort = sortParam.desc;
    } else if (this.dataSort === sortParam.desc) {
      this.dataSort = sortParam.asc;
    } else {
      this.dataSort = sortParam.desc;
    }
  }

  switchSortCount(): void {
    this.currentSortParam = currentSortParam.count;
    if (!this.sortByCount) {
      this.sortByCount = sortParam.desc;
    } else if (this.sortByCount === sortParam.desc) {
      this.sortByCount = sortParam.asc;
    } else {
      this.sortByCount = sortParam.desc;
    }
  }

  changeState(param: string): void {
    switch (true) {
      case param === currentSortParam.date:
        return this.switchSortDate();
        break;
      case param === currentSortParam.count:
        return this.switchSortCount();
        break;
      default:
        return;
    }
  }

  sortDate(sortBy: string): void {
    this.changeState(sortBy);

    this.videoResponse.response.sort((a, b) => {
      if (this.dataSort === 'desc') {
        return a.snippet.publishedAt > b.snippet.publishedAt ? 1 : -1;
      } 
      return a.snippet.publishedAt < b.snippet.publishedAt ? 1 : -1;
    });
  }

  sortCount(sortBy: string): void {
    this.changeState(sortBy);

    this.videoResponse.response.sort((a, b) => {
      if (this.sortByCount === 'desc') {
        return Number(a.statistics.viewCount) > Number(b.statistics.viewCount) ? 1 : -1;
      } 
      return Number(a.statistics.viewCount) < Number(b.statistics.viewCount) ? 1 : -1;
    });
  }
}
