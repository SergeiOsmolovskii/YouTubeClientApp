import { Component, OnInit } from '@angular/core';
import { VideoResponseService } from 'src/app/services/video-response.service';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss']
})
export class SortPanelComponent implements OnInit {

/* TO FIX ALL */

  public dataSort: boolean | string = '';
  private sortByCount: boolean | string = '';
  public tagsSort: boolean | string = '';

  constructor(public videoResponse: VideoResponseService) { }

  ngOnInit(): void {
    console.log('SortPanelComponent');
  }

  shangeArrow(sortParam: any) {
    console.log(sortParam);
    
    if (sortParam === '') {
      sortParam = true;
    } else { 
      sortParam = false;
    }
  }

  setSortingParam (param: string) {
    switch (!!param) {
      case (param === 'data'): 
        return this.dataSort;
        break;
      case (param === 'count'): 
        return this.sortByCount;
        break;
      case (param === 'tags'): 
        return this.tagsSort;
        break;
      default:
        return;
    }
  }

  sortData(sortBy: string) {
    let z = this.setSortingParam(sortBy);
    console.log(z);
    
/*     switch (true) {
      case sortBy === '.snippet.publishedAt':
        this.shangeArrow(this.dataSort);
      break
    } */

    if (z === false) {
      z = true;
    } else { 
      z = false;
    }

    
    console.log(this.videoResponse.response.sort((a, b) => {
      
      if (z) {
        return a.snippet.publishedAt > b.snippet.publishedAt ? 1 : -1;
      } else return a.snippet.publishedAt < b.snippet.publishedAt ? 1 : -1;
    }));
  }

}
