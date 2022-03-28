import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IVideoResponse } from '../models/video-response.model';

@Injectable({
  providedIn: 'root'
})
export class VideoResponseService {
  
  private url = './assets/response.json';

  constructor(private http: HttpClient) { }

  getResponse(): Observable<IVideoResponse> {
    return this.http.get<IVideoResponse>(this.url);
  }
}
