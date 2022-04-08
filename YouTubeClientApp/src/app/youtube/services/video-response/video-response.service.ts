import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IResponseItem, IVideoResponse } from '../../models/video-response.model';

@Injectable({
  providedIn: 'root'
})
export class VideoResponseService {
  
  private url = './assets/response.json';
  public response: IResponseItem[] = [];
  
  constructor(private http: HttpClient) { }

  getResponse(): Observable<IVideoResponse> {
    return this.http.get<IVideoResponse>(this.url);
  }
}
