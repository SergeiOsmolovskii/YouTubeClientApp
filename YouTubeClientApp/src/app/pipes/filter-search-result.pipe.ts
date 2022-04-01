import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItem } from '../models/video-response.model';

@Pipe({
  name: 'filterSearchResult'
})
export class FilterSearchResultPipe implements PipeTransform {

  transform(value: IResponseItem[], searchItem: string): IResponseItem[] {
    return searchItem 
    ? value.filter(item => {return item.snippet.title.toLowerCase().includes(searchItem.toLowerCase())})
    : value;
  }

}
