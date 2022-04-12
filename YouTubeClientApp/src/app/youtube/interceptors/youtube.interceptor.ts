import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const APIKey = 'AIzaSyCjsnzmoLaHoHHhxMYgdiOQ735ItdWRTaM';
    const URL = 'https://youtube.googleapis.com/youtube/v3';

    return next.handle(
      request.clone({
        url: `${URL}/${request.url}`,
        setParams: {
          key: APIKey,
        },
      })
    );
  }
}
