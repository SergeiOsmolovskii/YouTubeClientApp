import { Injectable } from '@angular/core';
import { mergeMap, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IResponseItem, IVideoResponse } from '../../models/video-response.model';

@Injectable({
  providedIn: 'root'
})

export class VideoResponseService {

  private resultsCount = 20;
  public response: IResponseItem[] = [];

  constructor(private http: HttpClient) { }

  getResponse(word: string): Observable<IVideoResponse> {
    const url = `search?part=snippet&type=video&maxResults=${this.resultsCount}&q=${word}`;
    const IDArr: String[] = [];

    return this.http.get<IVideoResponse>(url).pipe(
      mergeMap(data => {
        data.items.map(item => IDArr.push(item.id.videoId));
        this.getStatic(IDArr);
        return of(data.items);
      }),
      mergeMap(() => this.getStatic(IDArr)));
  }

  getStatic(ids: String[]): Observable<IVideoResponse> {
    const url = `videos?part=snippet%2Cstatistics&id=${ids.join(',')}`;
    return this.http.get<IVideoResponse>(url);
  }
}
