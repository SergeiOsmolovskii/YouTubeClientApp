import { Injectable } from '@angular/core';
import { currentSortType, sortType } from '../models/video-response.model';
import { VideoResponseService } from './video-response.service';

@Injectable({
  providedIn: 'root',
})
export class SortSearchService {
  public dataSort: sortType = '';
  public sortByCount: sortType = '';
  public searchItem: string = '';
  public currentSortParam: currentSortType = '';

  constructor(public videoResponse: VideoResponseService) {}

  switchSortDate() {
    this.currentSortParam = 'data';
    if (this.dataSort === '') {
      this.dataSort = 'desc';
    } else if (this.dataSort === 'desc') {
      this.dataSort = 'asc';
    } else {
      this.dataSort = 'desc';
    }
  }

  switchSortCount() {
    this.currentSortParam = 'count';
    if (this.sortByCount === '') {
      this.sortByCount = 'desc';
    } else if (this.sortByCount === 'desc') {
      this.sortByCount = 'asc';
    } else {
      this.sortByCount = 'desc';
    }
  }

  changeState(param: string) {
    switch (true) {
      case param === 'data':
        return this.switchSortDate();
        break;
      case param === 'count':
        return this.switchSortCount();
        break;
      default:
        return;
    }
  }

  sortDate(sortBy: string) {
    this.changeState(sortBy);

    this.videoResponse.response.sort((a, b) => {
      if (this.dataSort === 'desc') {
        return a.snippet.publishedAt > b.snippet.publishedAt ? 1 : -1;
      } else return a.snippet.publishedAt < b.snippet.publishedAt ? 1 : -1;
    });
  }

  sortCount(sortBy: string) {
    this.changeState(sortBy);

    this.videoResponse.response.sort((a, b) => {
      if (this.sortByCount === 'desc') {
        return Number(a.statistics.viewCount) > Number(b.statistics.viewCount) ? 1 : -1;
      } else return Number(a.statistics.viewCount) < Number(b.statistics.viewCount) ? 1 : -1;
    });
  }
}
