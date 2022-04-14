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
  public word = '';
  public static: IResponseItem[] = [];
  public IDArr: String[] = [];


  constructor(private http: HttpClient) { }

  getResponse(word: string): Observable<IVideoResponse> {
    const url = `search?part=snippet&type=video&maxResults=${this.resultsCount}&q=${word}`;
    return this.http.get<IVideoResponse>(url).pipe(
      mergeMap(data => {
        data.items.map(item => this.IDArr.push(item.id.videoId));
        return of(data.items);
      }),
      mergeMap(() => this.getStatic())
    );
  }

  getStatic(): Observable<IVideoResponse> {
    const url = `videos?part=snippet%2Cstatistics&id=${this.IDArr}`;
    return this.http.get<IVideoResponse>(url);
  }
}
